import {PageService} from '../page.service';
import {NgZone} from '@angular/core';
import {RemoteService} from './remote.service';

export class RemoteServiceReactor {
  constructor(private rs: RemoteService, private ps: PageService, private zone: NgZone) {
    window['casuyagentreactor'] = this;
  }

  updateRoomState(roomJson) {
    this.zone.run(() => {
      this.rs.room = JSON.parse(roomJson);
    });
  }

  updateUserList(usersJson) {
    this.zone.run(() => {
      this.rs.users = JSON.parse(usersJson);
    });
  }

  updateGameState(gameJson) {
    this.zone.run(() => {
      this.rs.game = JSON.parse(gameJson);
      this.rs.gameBoard.update(this.rs.game.board);
      if (this.rs.game.showResult) {
        this.ps.gotoResultPage();
      } else {
        this.ps.gotoGamePage();
      }
    });
  }

  updateInvitation(invJson) {
    this.zone.run(() => {
      this.rs.invitation = JSON.parse(invJson);
    });
  }
}
