import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page.service';
import {RemoteService} from '../../remote/remote.service';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  randomName: string;
  showRemoteConfig = true;

  constructor(public ps: PageService, public rs: RemoteService) {
    this.setRandomName();
  }

  ngOnInit() {
  }

  setRandomName() {
    const adj = ['a', 'b', 'c', 'd', 'e', 'f'];
    const animals = ['q', 'w', 'e', 'r', 't', 'y'];
    const salt = Date.now() % 10000;
    this.randomName = adj[salt % adj.length] + animals[salt % animals.length] + salt;
  }

  onSubmit(e: Event, loginForm) {
    e.preventDefault();
    const values = loginForm.value;
    values.username = values.username || this.randomName;
    console.log(values);
    // if (!username) {
    //   username = this.randomName;
    // }
    const ok = this.rs.connectAndLogin(values);
    if (ok) {
      this.ps.gotoLobbyPage();
    }
  }

}
