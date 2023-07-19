const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;//to claculate these times using setInterval


//start timer function
function startTimer(){
    startTime = Date.now() ;
    timerInterval = setInterval(()=>{
       elapsedTime = Date.now() - startTime;
       //update the timer
       timerEl.textContent = elapsedTime;
    },10)
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