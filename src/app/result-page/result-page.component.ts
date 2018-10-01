import {Component, OnInit} from '@angular/core';
import {RemoteService} from '../../remote/remote.service';
import {IGameUser} from '../../remote/IGameUser';
import {PageService} from '../../page.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(public rs: RemoteService, private ps: PageService) {
  }

  ngOnInit() {
  }

  get isCurrentUserWinner() {
    return this.rs.game.users.filter(u => u.name === this.rs.username).length;
  }

  get maxScore() {
    return this.rs.game.users
      .reduce((a: IGameUser, b: IGameUser) => a.score > b.score ? a : b)
      .score;
  }

  get winners() {
    return this.rs.game.users.filter(u => u.score === this.maxScore);
  }

  get losers() {
    return this.rs.game.users.filter(u => u.score < this.maxScore);
  }

  exit() {
    this.rs.game = null;
    this.ps.gotoLobbyPage();
  }

}
