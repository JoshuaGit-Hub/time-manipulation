function atualizarTime(){
const displayTime = document.getElementById('time');

const formatador = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });

displayTime.textContent = formatador.format(new Date());
}

setInterval(atualizarTime, 1000)
