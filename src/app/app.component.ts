import {Component, HostListener} from '@angular/core';

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
  // title = 'ui';
  // availableLetters = (new Array(199)).fill('a');
  board = (new Array(20))
    .fill(1)
    .map(() =>
      (new Array(20))
        .fill(1)
        .map(() => new BoardSlot())
    );
  selectedSlot: BoardSlot;

  @HostListener('document:keydown', ['$event.key']) onKeyDown(key) {
    const isLetter = !!key.match(/^[a-z]$/i);
    if (isLetter && !this.selectedSlot.letter) {
      this.selectedSlot.letter = key;
    }
  }

  constructor() {
    // console.table(this.board);
  }

  pass() {
    const v = confirm('fjksdl');
    alert(v);
  }

  focus(x, y) {
    this.selectedSlot = this.board[y][x];
  }
}
