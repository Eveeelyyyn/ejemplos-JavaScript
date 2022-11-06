function abrirRegalo(event) {
  const image = event.currentTarget;
  image.src = '../ejemplo5/giphy.gif';

  const mensaje = document.querySelector('h1');
  mensaje.textContent = '¡Felicidades!';

  image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);
