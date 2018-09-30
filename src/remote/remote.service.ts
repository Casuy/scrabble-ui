import {Injectable, NgZone} from '@angular/core';
import {PageService} from '../page.service';
import {RemoteServiceReactor} from './remoteServiceReactor';
import {Board} from './board';
import {IUser} from './IUser';
import {IGame} from './IGame';
import {IRoom} from './IRoom';
import {IInvitation} from './IInvitation';


@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  s: any;
  users: IUser[] = [];
  username: string;
  room: IRoom;
  invitation: IInvitation;
  game: IGame;
  gameBoard: Board = new Board();
  reactor: RemoteServiceReactor;

  get inRoom() {
    return !!this.room;
  }


  constructor(private zone: NgZone, private ps: PageService) {
    this.reactor = new RemoteServiceReactor(this, ps, zone);
  }

  bindRemote() {
    // @ts-ignore
    const agent = window['casuyagent'];

    if (agent) {
      // @ts-ignore
      this.s = agent.server;
      agent.hello();
    } else {
      setTimeout(() => {
        // this.game = {
        //   'users': [{'name': 'happysheep9261', 'score': 0}],
        //   'board': [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]],
        //   'activeUser': 'happysheep9261',
        //   'id': 569993
        // };
        this.username = 'sleepinghedgehog35691 ';
        this.game = {
          'users': [{'name': 'sleepinghedgehog3569', 'score': 0}],
          'board': [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, 'f', null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]],
          'activeUser': 'sleepinghedgehog3569',
          'vote': {'active': true, 'wordA': 'f', 'wordB': 'f'},
          'id': 124278
        };
        this.gameBoard.update(this.game.board);
        this.ps.gotoGamePage();
      }, 1000);
    }
  }

  isCurrentUser(v: any) {
    switch (typeof v) {
      case 'string':
        return v === this.username;
      case 'object':
        return v['name'] === this.username;
    }
    return false;
  }

  connectAndLogin(params: {
    username: string
    localHost: string
    localPort: number
    remoteHost: string
    remotePort: number
  }) {
    this.bindRemote();
    if (this.s) {
      this.username = params.username;
      this.s.bindServer(params.remoteHost, params.remotePort);
      return this.s.login(params.username, params.localHost, params.localPort);
    }
    return true;
  }

  createRoom() {
    if (this.s) {
      this.s.createRoom(this.username);
    } else {
      this.room = {
        id: 138289,
        users: ['a', 'b', 'c']
      };
    }
  }

  leaveRoom() {
    if (this.room) {
      const roomId = this.room.id;
      this.room = null;
      if (this.s) {
        this.s.leaveRoom(roomId, this.username);
      }

    }
  }


  roomInvite(invitee: string) {
    if (this.room) {
      if (this.s) {
        this.s.roomInvite(this.room.id, this.username, invitee);
      }
    }
  }

  startGame() {
    if (this.s) {
      this.s.startGame(this.room.id);
    }
  }

  // @ts-ignore
  gameSubmit(y: number = -1, x: number = -1, v: string = '_PASS') {
    if (this.s) {
      this.s.gameSubmit(this.username, y, x, v);
    }
  }

  gameVote(selectedWords: string[]) {
    this.game.vote.active = false;
    if (this.s) {
      this.s.gameVote(this.username, JSON.stringify(selectedWords));
    }
  }

  acceptRoomInvitation(roomId: number) {
    this.invitation = null;
    if (this.s) {
      this.s.acceptRoomInvitation(roomId, this.username);
    }
  }

  refuseRoomInvitation(roomId: number) {
    this.invitation = null;
    if (this.s) {
      this.s.refuseRoomInvitation(roomId, this.username);
    }
  }

}

