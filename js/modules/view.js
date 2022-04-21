import { SIZE_BLOCK, COLUMNS, ROWS } from '../script.js';

export class View {
  constructor(container) {
    this.container = container;
    this.preview()
  }

  colors = {
    J: '#FF1493',
    I: '#6A5ACD',
    O: '#6B8E23',
    L: '#66CDAA',
    2: '#6495ED',
    T: '#696969',
    S: '#F4A460',
  };

  canvas = document.createElement('canvas');
  context = this.canvas.getContext('2d');

  preview () {

  }

  init() {
    this.canvas.classList.add('game-area')
    this.container.append(this.canvas)
    this.canvas.width = SIZE_BLOCK * COLUMNS
    this.canvas.height = SIZE_BLOCK * ROWS
  }

  showArea(area) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (let y = 0; y < area.length; y++) {
      const line = area[y]

      for (let x = 0; x < line.length; x++) {
        const block = line[x]

        if (block !== 'o') {
          this.context.fillStyle = this.colors[block]
          this.context.strokeStyle = '#fff'
          this.context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK)
          this.context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK)
        }
      }
    }
  }
}
