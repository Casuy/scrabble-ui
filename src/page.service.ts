import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page = 'login';

  constructor() {
    // this.page = 'result';
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

  gotoResultPage() {
    this.goto('result');
  }

  gotoLoginPage() {
    this.goto('login');
  }
}
