let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let milisegundos = document.getElementById('milisegundos');
//buttons =================================================
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resumeBtn = document.getElementById('resumeBtn')
const resetBtn = document.getElementById('resetBtn')

let interval;
let mil = 0;
let sec = 0;
let min = 0;
let paused = false;

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener('click', pauseTime);
resetBtn.addEventListener('click', resetTime);
// resumeBtn.addEventListener('click', resumeTime);

function startTime() {
    interval = setInterval(() => {
        if (!paused) {
            mil += 1

            if (mil > 99) {
                sec++;
                mil = 0;
            }

            if (sec === 60) {
                min++;
                sec = 0;
            }


            minutos.textContent = format(min);
            segundos.textContent = format(sec);
            milisegundos.textContent = format(mil);
        }
    }, 10);

    paused = false
    

    // startBtn.style.display = "none";
    // pauseBtn.style.display = "block"
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

function pauseTime() {
    paused = true;
   
    // pauseBtn.style.display = 'none'
    // resumeBtn.style.display = 'block'
    
}

// function resumeTime() {
//     paused = false;
// }

function resetTime() {
    clearInterval(interval);
    mil = 0
    sec = 0
    min = 0
    milisegundos.textContent = '00';
    segundos.textContent = '00';
    minutos.textContent = '00';

    // pauseBtn.style.display = 'none'
    // resumeBtn.style.display = 'none'
    // startBtn.style.display = 'block'
}




