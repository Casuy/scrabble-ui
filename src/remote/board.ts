export class Board {
  rows = (new Array(20))
    .fill(1)
    .map(() =>
      (new Array(20))
        .fill(1)
        .map(() => new BoardSlot())
    );

  update(data: string[][]) {
    data.forEach((row, y) => {
      row.forEach((v, x) => {
        const slot = this.rows[y][x];
        slot.unlock();
        slot.update(v);
        if (!!v) {
          slot.lock();
        }
      });
    });
  }

  getPos(slot: BoardSlot) {
    const pos = {x: null, y: null};
    this.rows.forEach((row, y) => {
      row.forEach((slt, x) => {
        if (slot === slt) {
          pos.x = x;
          pos.y = y;
        }
      });
    });
    return pos;
  }
}


export class BoardSlot {
  letter: string;
  _lock = false;

  isFilled() {
    return !!this.letter;
  }

  update(v: string) {
    if (this._lock) {
      return;
    }
    this.letter = v;
  }

  lock() {
    this._lock = true;
  }

  unlock() {
    this._lock = false;
  }
}
