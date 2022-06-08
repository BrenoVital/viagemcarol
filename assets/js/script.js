var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaCarolTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
  //1500
  criaCarolTempo = 1500
} else if (nivel === 'dificil') {
  //1000
  criaCarolTempo = 1000

} else if (nivel === 'chucknorris') {
  //750
  criaCarolTempo = 750
}

function ajusteTamanhoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(altura, largura)
}

ajusteTamanhoJogo()


var cronometro = setInterval(function () {
  tempo -= 1
  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaCarol)
    window.location.href = 'vitoria.html'
  } else
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function posicaoRandomica() {

  // remover a imagem anteior (caso exista)
  if (document.getElementById('carol')) {
    document.getElementById('carol').remove()

    if (vidas > 3) {
      window.location.href = 'game-over.html'
    } else {
      document.getElementById('v' + vidas).src = '../assets/images/passaporte-vazio.png';

      vidas++
    }

  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  // elemento HTML
  var carol = document.createElement('img')
  carol.src = './assets/images/carol.jpeg'
  carol.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  carol.style.left = posicaoX + 'px'
  carol.style.top = posicaoY + 'px'
  carol.style.position = 'absolute'
  carol.id = 'carol'
  carol.onclick = function () {
    this.remove()
  }

  document.body.appendChild(carol)
  ladoAleatorio()
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'carol'
    case 1:
      return 'carol-1'
    case 2:
      return 'carol-2'
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'

  }
}