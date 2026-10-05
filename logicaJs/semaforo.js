const imagem = document.querySelector('img')
const botoes = document.querySelectorAll('.button')

const img = {
    red:        'vermelho',
    yellow:     'amarelo',
    green:      'verde',
    automatic:  'automatico'
}

function trocarCor(idButton) {
    const nomeDaImagem = img[idButton] || 'desligado';
    imagem.src = `./img/${nomeDaImagem}.png`

};


function iniciarAutomatico() {
    const ordem = ['red', 'yellow', 'green']
    let indice = 0

    iniciarIntervalo = setInterval(() =>{
        trocarCor(ordem[indice])
        indice = (indice + 1) % ordem.length
    },1000)

};

function limparAutomatico() {
    if (iniciarIntervalo) {
        clearInterval(iniciarIntervalo)
        
    }

};

botoes.forEach(button =>{
    button.addEventListener('click', (event)=> {
        const id = event.target.id
        if (id === 'automatic') {
            iniciarAutomatico()
            return

        }
        limparAutomatico()
        trocarCor(id)

        

    });

});

