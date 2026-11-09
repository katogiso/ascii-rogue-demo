'use strict';
(() => {
  const maze = [
    '###############',
    '#...#.........#',
    '#.#.#.#####.#.#',
    '#.#...#...#.#.#',
    '#.#####.#.#.#.#',
    '#.......#...#.#',
    '###.#######.#.#',
    '#...#.......#>#',
    '###############'
  ];
  const directions = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const keys = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
  const map = document.querySelector('#map');
  const status = document.querySelector('#status');
  let x, y, steps, cleared;

  function render() {
    map.replaceChildren();
    maze.forEach((row, rowY) => {
      [...row].forEach((tile, colX) => {
        const cell = document.createElement('span');
        const player = x === colX && y === rowY;
        cell.textContent = player ? '@' : tile;
        cell.className = player ? 'player' : tile === '>' ? 'goal' : '';
        map.append(cell);
      });
      if (rowY < maze.length - 1) map.append('\n');
    });
    map.setAttribute('aria-label', `迷宮マップ。あなたは左から${x + 1}、上から${y + 1}。出口は左から14、上から8。`);
    document.querySelector('#steps').textContent = `${steps} STEPS`;
  }

  function move(direction) {
    if (cleared) return;
    const [dx, dy] = directions[direction];
    const next = maze[y + dy]?.[x + dx];
    if (!next || next === '#') {
      status.textContent = '壁があります。別の道を探そう。';
      return;
    }
    x += dx; y += dy; steps++;
    cleared = next === '>';
    status.textContent = cleared ? `CLEAR! ${steps}歩で脱出成功！` : '出口 > を目指そう。';
    render();
  }

  function restart() {
    x = 1; y = 1; steps = 0; cleared = false;
    status.textContent = '出口を探して探索開始。';
    render();
  }
  document.querySelectorAll('[data-dir]').forEach(button => {
    button.addEventListener('click', () => move(button.dataset.dir));
  });
  window.addEventListener('keydown', event => {
    if (!keys[event.key] || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    move(keys[event.key]);
  });
  document.querySelector('#restart').addEventListener('click', restart);
  restart();
})();
