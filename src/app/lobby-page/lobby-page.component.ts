import {Component, OnInit} from '@angular/core';
import {RemoteService} from '../../remote/remote.service';
import {PageService} from '../../page.service';
import {IUser} from '../../remote/IUser';

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

  invite(name: string) {
    this.rs.roomInvite(name);
    this.operatingUser = null;
  }

}
