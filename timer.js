const input = document.getElementById('input');

let tempoRestante = 00;
let estaRodando = false;
let intervalo;

const btnStarPause = document.getElementById('pausar-despausar');
const displayTimer = document.getElementById('time');

input.addEventListener('input', () => {
    if(!(input.value < 0)){
        if(input.value <= 999){
            tempoRestante = input.value * 60;
            const minutosFormatados = input.value.toString().padStart(2, '0');

            displayTimer.textContent = `${minutosFormatados}:${'00'}`;
        }
    }
});

const tempoInicial = tempoRestante;

function iniciarTemporizador(){
    intervalo = setInterval(temporizador, 1000);
    estaRodando = true;
}

function atualizarDisplay(segundos) {
    const minutosFormatados = Math.floor(segundos / 60).toString().padStart(2, '0');
    const segundosFormatados = (segundos % 60).toString().padStart(2,'0');
    displayTimer.textContent = `${minutosFormatados}:${segundosFormatados}`;
}

btnStarPause.addEventListener('click', () => {

        if(!estaRodando){
            intervalo = setInterval(temporizador, 1000);
            
                btnStarPause.textContent = 'PAUSE';
                btnStarPause.style.backgroundColor = 'red';
           
            estaRodando = true;
        }
        else{
            clearInterval(intervalo);
            btnStarPause.textContent = 'START';
            btnStarPause.style.backgroundColor = 'white';
            estaRodando = false;
        }
     
});

function temporizador() {
    atualizarDisplay(tempoRestante);

    if (tempoRestante <= 0) {
        tempoRestante = tempoInicial; // reseta
        clearInterval(intervalo);
        estaRodando = false;
        btnStarPause.textContent = 'START';
        btnStarPause.style.backgroundColor = 'white';
        atualizarDisplay(tempoRestante); // mostra o reset
    } else {
        tempoRestante -= 1;
    }
}

