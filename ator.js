// código do ator
let xAtor = 85;
let yAtor = 375;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      10
    );
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 375;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 210, 255));
  text(meusPontos, width / 2, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos++;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 375;
}
