import {Component, OnInit} from '@angular/core';
import {IUser, RemoteService} from '../../remote.service';
import {PageService} from '../../page.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  showRoom = false;
  operatingUser: IUser;

  constructor(public rs: RemoteService, public ps: PageService) {
  }

  ngOnInit() {
  }

  invite(u: IUser) {
    alert(u.name);
  }

  createRoom() {
    this.rs.createRoom();
  }

  leaveRoom() {
    this.rs.leaveRoom();
  }

  startGame() {
    this.ps.gotoGamePage();
  }
}
