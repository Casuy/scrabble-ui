import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  s: any;
  users: IUser[] = [{name: 'devbycm', inRoom: false}, {name: 'Casuy', inRoom: true}];
  username: string;
  room: IRoom;
  game: IGame;

  get inRoom() {
    return !!this.room;
  }


  constructor() {
    if (false) {
      // @ts-ignore
      this.s = window.casuyagent.server;
    } else {
      this.username = 'Casuy';
      this.game = {
        id: 123213,
        users: [{
          name: 'Casuy',
          score: 777
        }, {
          name: 'Unknown',
          score: 231
        }, {
          name: 'cmp',
          score: 213
        }, {
          name: 'NameAlreadyExists',
          score: 32189
        }],
        activeUser: 'Casuy',
        vote: {
          active: true,
          wordA: 'fdsafsdafs',
          wordB: 'ryeuwriew'
        }
      };
    }
  }

  isCurrentUser(v: any) {
    switch (typeof v) {
      case 'string':
        return v === this.username;
      case 'object':
        return v['name'] === this.username;
    }
    console.log(this.username, v);
    return false;
  }

  connectAndLogin(username: string, localHost: string, localPort: number, remoteHost: string, remotePort: number) {
    if (this.s) {
      this.s.bindServer(remoteHost, remotePort);
      this.s.login(username, localHost, localPort);
    }
    this.username = username;
  }

  createRoom() {
    if (this.s) {
      this.room = this.s.createRoom();
    } else {
      this.room = {
        id: 138289,
        users: ['a', 'b', 'c']
      };
    }
  }

  leaveRoom() {
    if (this.s) {
      this.s.leaveRoom();
    }
    this.room = null;
  }

  vote(selectedWords: string[]) {
    alert(JSON.stringify(selectedWords));
  }
}

export interface IUser {
  name: string;
  inRoom?: boolean;
  inGame?: boolean;
}

export interface IRoom {
  id: number;
  users: string[];
}

export interface IGame {
  id: number;
  users: IGameUser[];
  activeUser: string;
  vote: IGameVote;
}

export interface IGameUser {
  name: string;
  score: number;
}

export interface IGameVote {
  active: boolean;
  wordA: string;
  wordB: string;
}
