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
let timeLift = 0.1 * 60;
let isRunning = false;

function updateTimer() {
    const minutes = Math.floor(timeLift / 60).toString().padStart(2, "0");
    const seconds = Math.floor(timeLift % 60).toString().padStart(2, "0");

    if (timeLift > 0) {
        timeLift--;
    } else {
        clearInterval(timer);
        alert('the timer done!');

    }

    document.getElementById("numberTimer").innerText = (`${minutes}:${seconds}`)

}
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


