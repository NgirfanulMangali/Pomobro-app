// this popup setting button 
document.getElementById('setting').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('hidden');

});

// this popup close button
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');

})


// timer
let timer;
let isRunning = false;

function updateTimer(waktu) {

    let result = waktu * 60;

    const minutes = Math.floor(result / 60).toString().padStart(2, "0");

    const seconds = Math.floor(result % 60).toString().padStart(2, "0");


    if (result > 0) {
        result--;
    } else {
        clearInterval(timer);
        alert('the timer done!');

    }

    document.getElementById("numberTimer").innerText = (`${minutes}:${seconds}`)

    return result;
}
// popup
const pomoInput = document.getElementById("pomodoroInput")

document.getElementById("apply").addEventListener('click', () => {
    const test = pomoInput.value;
    updateTimer
    document.getElementById("numberTimer").innerHTML = `${test}:00`;

})


// Start Button
document.getElementById("start").addEventListener(
    'click', () => {
        if (!isRunning) {
            timer = setInterval(updateTimer, 1000);
            isRunning = true;
            document.getElementById("start").innerHTML = "PAUSE";
        } else {
            clearInterval(timer);
            isRunning = false;
            document.getElementById("start").innerHTML = "START";
        }

    }
)








