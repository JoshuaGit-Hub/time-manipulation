const input = document.getElementById('input');

let tempoRestante = 10;
let estaRodando = false;
let intervalo;

const btnStarPause = document.getElementById('pausar-despausar');
const displayTimer = document.getElementById('time');

const dedoDoMeio = document.getElementById('dedo-do-meio');

input.addEventListener('input', () => {
    if(input.value > 1000){
        dedoDoMeio.style.display = 'block';
        
        setTimeout(() => {
            dedoDoMeio.style.display = 'none';
        }, 3000);
    }else{
        tempoRestante = input.value;
        const minutosFormatados = Math.floor(input.value / 60).toString().padStart(2, '0');
        const segundosFormatados = (input.value % 60).toString().padStart(2,'0');
        displayTimer.innerText = `${minutosFormatados}:${segundosFormatados}`;
    }
});

const tempoInicial = tempoRestante;

function iniciarTemporizador(){
    intervalo = setInterval(temporizador, 1000);
    estaRodando = true;
}

function startPause(){
    const minutosFormatados = Math.floor(tempoRestante / 60).toString().padStart(2, '0');
    const segundosFormatados = (tempoRestante % 60).toString().padStart(2,'0');
    displayTimer.textContent = `${minutosFormatados}:${segundosFormatados}`;

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
}

function temporizador(){

    const minutosFormatados = Math.floor(tempoRestante / 60).toString().padStart(2, '0');
    const segundosFormatados = (tempoRestante % 60).toString().padStart(2,'0');
    
    displayTimer.textContent = `${minutosFormatados}:${segundosFormatados}`;
    
    if(tempoRestante <= 0){
        const minutosCongelados = Math.floor(tempoInicial / 60).toString().padStart(2, '0');
        const segundosCongelados = (tempoInicial % 60).toString().padStart(2, '0');
        displayTimer.textContent = `${minutosCongelados}:${segundosCongelados}`;
        
        btnStarPause.textContent = 'START';
        btnStarPause.style.backgroundColor = 'white';
    }

    if (tempoRestante > 0) {
        tempoRestante -= 1;
    }else{
        clearInterval(intervalo);
        estaRodando = false;
        tempoRestante = tempoInicial;
    }
}

startPause();
