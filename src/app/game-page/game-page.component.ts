import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RemoteService} from '../../remote/remote.service';
import {BoardSlot} from '../../remote/board';


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


  selectedSlot: BoardSlot;
  lastSelectedSlots: BoardSlot[] = [];
  lastModifiedSlot: BoardSlot;
  voteSelection = new Selection();

  onKeyDown(input) {
    const str = input.value;
    const key = str.charAt(str.length - 1);
    const isLetter = !!key.match(/^[a-z]$/i);
    const slotHasLetter = this.selectedSlot.letter;
    const currentUserTurn = this.rs.isCurrentUser(this.rs.game.activeUser);
    const voting = !!this.rs.game.vote && this.rs.game.vote.active;
    if (isLetter && !slotHasLetter && currentUserTurn && !voting) {
      this.lastSelectedSlots.forEach(slot => slot.update(null));
      this.lastSelectedSlots = [];
      this.selectedSlot.update(key);
      this.lastModifiedSlot = this.selectedSlot;
    }
    input.value = '';
  }

  constructor(public rs: RemoteService) {
    // console.table(this.board);
  }

  focus(e, x, y) {
    e.preventDefault();
    if (this.selectedSlot) {
      this.lastSelectedSlots.push(this.selectedSlot);
    }
    this.selectedSlot = this.rs.gameBoard.rows[y][x];
    const input = this.input.nativeElement;
    input.focus();
  }

  submit() {
    const pos = this.rs.gameBoard.getPos(this.lastModifiedSlot);
    this.rs.gameSubmit(pos.y, pos.x, this.lastModifiedSlot.letter);
  }

  pass() {
    this.rs.gameSubmit();
  }
}
