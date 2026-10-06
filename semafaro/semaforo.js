const img = document.getElementById('img');
const botao = document.querySelectorAll('#buttons button');

const imagens = {
    vermelho: './img/vermelho.png',
    amarelo: './img/amarelo.png',
    verde: './img/verde.png',
    desligado: './img/desligado.png'
}

function corAutomatica(){
    imagensArray = Object.keys(imagens);
    cont = 0;
    if(cont < imagensArray.length){
        intervalo = setInterval(() => {
            escolherCor();
            cont++;
        }, 1000);
        

    }else if (cont >= 3) {
        cont = 0;
    }
}
 




function escolherCor(){
  botao.forEach((botao) =>{
    botao.addEventListener('click', (id) => {
        if(id.target.id === 'automatico'){
            corAutomatica();
            return;
        }
        nomeCor = id.target.id
        img.src = `./img/${nomeCor}.png`;
    });
});
      
}


escolherCor();