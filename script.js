const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");


//start timer function
function startTimer(){
    console.log("start")
}

//stop timer function
function stopTimer(){
    console.log("stop")
}

//reset timer function
function resetTimer() {
    console.log("reset")
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);