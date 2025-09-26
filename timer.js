const input = document.getElementById('input');

let tempoRestante = 0;
let estaRodando = false;
let intervalo;

const btnStarPause = document.getElementById('pausar-despausar');
const displayTimer = document.getElementById('time');
let horaAcabar = document.getElementById('horasAcabar');
let vaiacabarTexte = document.getElementById('vaiacabarTexte');
let horaDeFim = 0;

input.addEventListener('input', () => {
    if(!(input.value < 0)){
        if(input.value <= 999){
            tempoRestante = input.value * 60;
            const minutosFormatados = input.value.toString().padStart(2, '0');
            
            displayTimer.textContent = `${minutosFormatados}:${'00'}`;
            if(!(input.value === "" ||  input.value === 0 || input.value == null)){
              setTimeout(() => {
                horaAcabar.style.display = 'block';
                vaiacabarTexte.style.display = 'block';
              }, 500);
            }
            else{
                horaAcabar.style.display = 'none';
                vaiacabarTexte.style.display = 'none';
            }

            horaDeFim = Date.now() + tempoRestante * 1000;
            formatarHoraDeFim();
        }
    }
});

function formatarHoraDeFim(){
    const formatador = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });

    horaAcabar.textContent = formatador.format(new Date(horaDeFim));
}

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
        tempoRestante = tempoInicial;
        clearInterval(intervalo);
        estaRodando = false;
        btnStarPause.textContent = 'START';
        btnStarPause.style.backgroundColor = 'white';
        atualizarDisplay(tempoRestante);
        horaAcabar.style.display = 'none';
        vaiacabarTexte.style.display = 'none';
    } else {
        tempoRestante -= 1;
    }
}

function atualizarHora(){
const horas = document.getElementById('horas');

const formatador = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });

horas.textContent = formatador.format(new Date());
}

setInterval(atualizarHora, 1000);
