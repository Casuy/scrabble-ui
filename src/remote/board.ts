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
        this.rows[y][x].update(v);
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

  isFilled() {
    return !!this.letter;
  }

  update(v: string) {
    this.letter = v;
  }
}
