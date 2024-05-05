const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const pauseBtn = document.querySelector('.pause-btn');

let sec = 0;
let min = 0;
let hours = 0;
let interval;

function updateTime() {
    ++sec;
    if (sec === 60) {
        ++min;
        sec = 0;
    }
    if (min === 60) {
        ++hours;
        min = 0;
    }
    timer.textContent = `${hours.toString().padStart(2,'0')}.${min.toString().padStart(2,'0')}.${sec.toString().padStart(2,'0')}`;
}

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    timer.textContent = '00.00.00'
    sec = 0;
    min = 0;
    hours = 0;
    startBtn.disabled = false;
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
})