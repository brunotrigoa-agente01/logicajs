const imagem = document.getElementById('img')
const botoes = document.querySelectorAll('.button')

const imagens = {
    red: 'vermelho',
    yellow: 'amarelo',
    green: 'verde',
    desligado: 'desligado'
}

let intervaloAutomatico = null

function trocarCor(cor) {
    const nomeArquivo = imagens[cor] || 'desligado'
    imagem.src = `./img/${nomeArquivo}.png`
}

function iniciarAutomatico() {
    const ordem = ['red', 'yellow', 'green']
    let indice = 0

    limparAutomatico()

    intervaloAutomatico = setInterval(() => {
        trocarCor(ordem[indice])
        indice = (indice + 1) % ordem.length
    }, 1000)
}

function limparAutomatico() {
    if (intervaloAutomatico) {
        clearInterval(intervaloAutomatico)
        intervaloAutomatico = null
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const id = event.target.id

        if (id === 'automatic') {
            iniciarAutomatico()
            return
        }

        limparAutomatico()
        trocarCor(id)
    })
})