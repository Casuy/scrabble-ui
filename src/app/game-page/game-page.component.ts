import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RemoteService} from '../../remote.service';

class BoardSlot {
  letter: string;

  isFilled() {
    return !!this.letter;
  }
}

class Selection {
  s = new Set<string>();

  isActive(name: string) {
    return this.s.has(name);
  }

  toggle(name: string) {
    const exists = this.s.has(name);
    if (exists) {
      this.s.delete(name);
    } else {
      this.s.add(name);
    }
  }

  get list() {
    return Array.from(this.s);
  }
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  // title = 'ui';
  // availableLetters = (new Array(199)).fill('a');

  @ViewChild('input') input: ElementRef;

  board = (new Array(20))
    .fill(1)
    .map(() =>
      (new Array(20))
        .fill(1)
        .map(() => new BoardSlot())
    );
  selectedSlot: BoardSlot;
  voteSelection = new Selection();

  onKeyDown(input) {
    const str = input.value;
    const key = str.charAt(str.length - 1);
    const isLetter = !!key.match(/^[a-z]$/i);
    if (isLetter && !this.selectedSlot.letter) {
      this.selectedSlot.letter = key;
    }
    input.value = '';
  }

  constructor(public rs: RemoteService) {
    // console.table(this.board);
  }

  focus(e, x, y) {
    e.preventDefault();
    this.selectedSlot = this.board[y][x];
    const input = this.input.nativeElement;
    input.focus();
  }
}
