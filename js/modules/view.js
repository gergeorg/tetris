import { SIZE_BLOCK, COLUMNS, ROWS } from '../script.js';

export class View {
  constructor(container) {
    this.container = container;
    this.preview();
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

  preview () {
    this.container.textContent = '';
    const preview = document.createElement('div');
    preview.classList.add('preview');
    preview.textContent = 'Press "ENTER" to start';
    this.container.append(preview);
  }

  init() {
    this.container.textContent = '';
    this.canvas.classList.add('game-area');
    this.canvas.style.gridArea = 'game';
    this.container.append(this.canvas);
    this.canvas.width = SIZE_BLOCK * COLUMNS;
    this.canvas.height = SIZE_BLOCK * ROWS;
  }

  createBlockScore() {
    const scoreBlock = document.createElement('div')
    scoreBlock.classList.add('score');

    const linesElem = document.createElement('p');
    const scoreElem = document.createElement('p');
    const levelElem = document.createElement('p');
    const recordElem = document.createElement('p');

    scoreBlock.append(linesElem, scoreElem, levelElem, recordElem)

    this.container.append(scoreBlock)

    return (lines, score, level, record) => {
      linesElem.textContent = `Lines: ${lines}`;
      scoreElem.textContent = `Score: ${score}`;
      levelElem.textContent = `Level: ${level}`;
      recordElem.textContent = `Record: ${record}`;
    }
  }

  createBlockNextTetramino() {
    const nextTetraminoBlock = document.createElement('div')
    const nextTetraminoText = document.createElement('p')
    nextTetraminoText.classList.add('next-text')
    nextTetraminoText.textContent = 'Next: '
    nextTetraminoBlock.classList.add('next');
    nextTetraminoBlock.style.width = `${SIZE_BLOCK * 4}px`;
    nextTetraminoBlock.style.height = `${SIZE_BLOCK * 4}px`;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    nextTetraminoBlock.append(nextTetraminoText);
    nextTetraminoBlock.append(canvas);


    this.container.append(nextTetraminoBlock);

    return (tetramino) => {
      canvas.width = SIZE_BLOCK * tetramino.length;
      canvas.height = SIZE_BLOCK * tetramino.length;
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < tetramino.length; y++) {
        const line = tetramino[y];

        for (let x = 0; x < line.length; x++) {
          const block = line[x];

          if (block !== 'o') {
            context.fillStyle = this.colors[block];
            context.strokeStyle = '#fff'
            context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
            context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          }
        }
      }
    }
  }

  showArea(area) {
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

        if (block !== 'o') {
          context.fillStyle = this.colors[block];
          context.strokeStyle = '#fff';
          context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
        }
      }
    }
  }
}
