import {Component} from '@angular/core';

class BoardSlot {
  letter: string;

  isFilled() {
    return !!this.letter;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  availableLetters = (new Array(199)).fill('a');
  board = (new Array(20)).fill((new Array(20)).fill(new BoardSlot()));

  constructor() {
    console.table(this.board);
  }

  pass() {
    const v = confirm('fjksdl');
    alert(v);
  }
}
