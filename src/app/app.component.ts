import {Component, HostListener} from '@angular/core';
import {PageService} from '../page.service';
import {RemoteService} from '../remote/remote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public ps: PageService, public rs: RemoteService) {
  }

}
