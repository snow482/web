function go(count) {
  const COUNT = count;
  const SQRT = Math.sqrt(COUNT);
  const container = document.querySelector('.container');
  const blocks = document.querySelectorAll('.container > .block');

  function blockClickHandler(ev) {
      ev.preventDefault();

      const { classList } = this;

      if (classList.contains('selected')) {
        classList.remove('selected');
      } else {
        classList.add('selected');
      }
    }

  Array.from(blocks).forEach((block) => {
    block.removeEventListener('click', blockClickHandler);
    block.remove();
  })

  container.style.gridTemplate = `repeat(${SQRT}, 1fr) / repeat(${SQRT}, 1fr)`;

  for (let i = 0; i <= COUNT; i++) {
    const block = document.createElement('div');

    block.className = 'block';

    block.addEventListener('click', blockClickHandler);

    container.appendChild(block);
  }
}

const form = document.querySelector('.form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const input = form.querySelector('input[type=text]');
  const count = parseInt(input.value, 10);

  go(count || 9);
});

go(25);
