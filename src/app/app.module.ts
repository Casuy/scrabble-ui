import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RemoteService} from '../remote/remote.service';
import {LoginPageComponent} from './login-page/login-page.component';
import {LobbyPageComponent} from './lobby-page/lobby-page.component';
import {GamePageComponent} from './game-page/game-page.component';
import {ContextmenuComponent} from './contextmenu/contextmenu.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LobbyPageComponent,
    GamePageComponent,
    ContextmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
