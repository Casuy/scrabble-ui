import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page = 'login';

  constructor() {
    // this.page = 'game';
  }

  goto(pageName: string) {
    this.page = pageName;
  }

  gotoLobbyPage() {
    this.goto('lobby');
  }


  gotoGamePage() {
    this.goto('game');
  }

  gotoLoginPage() {
    this.goto('login');
  }
}
