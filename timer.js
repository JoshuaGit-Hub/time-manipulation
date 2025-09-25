let tempoRestante = 4;
const tempoInicial = tempoRestante;
let intervalo;

function iniciarTemporizador(){
    setInterval(temporizador, 1000);
}

function startPause(){
    document.addEventListener('DOMContentLoaded', () => {
  
    const btnStarPause = document.getElementById('pausar-despausar');

    btnStarPause.addEventListener('click', () => {

    btnStarPause.textContent = 'bucetao';

  });
});
}

function temporizador(){
    const displayTimer = document.getElementById('time');
    
    const minutosFormatados = Math.floor(tempoRestante / 60).toString().padStart(2, '0');
    const segundosFormatados = (tempoRestante % 60).toString().padStart(2,'0');
    
    displayTimer.textContent = `${minutosFormatados}:${segundosFormatados}`;
    
    if(tempoRestante <= 0){
        const minutosCongelados = Math.floor(tempoInicial / 60).toString().padStart(2, '0');
        const segundosCongelados = (tempoInicial % 60).toString().padStart(2, '0');
        displayTimer.textContent = `${minutosCongelados}:${segundosCongelados}`;
    }

    if (tempoRestante > 0) {
        tempoRestante -= 1;
    }else{
        clearInterval(iniciarTemporizador);
    }
}

iniciarTemporizador();
startPause();