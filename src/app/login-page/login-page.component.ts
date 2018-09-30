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
    const adj = ['smart', 'stupid', 'honest', 'happy', 'sad', 'sleeping'];
    const animals = ['fox', 'cat', 'dog', 'sheep', 'rabbit', 'hedgehog'];
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
    this.rs.connectAndLogin(values);
    this.ps.gotoLobbyPage();
  }

}
