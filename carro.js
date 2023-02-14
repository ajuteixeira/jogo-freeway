let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 97, 150, 210, 263, 318];
let velocidadeCarros = [6, 3.5, 7, 5.5 ,4, 3.7];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
