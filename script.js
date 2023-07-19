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
       timerEl.textContent = formatTime(elapsedTime);
    },10)
}

function formatTime(elapsedTime){
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); //the first operation (%) takes out the minutes part and the second operation (division) returns the number of seconds.
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); //The first operation (%) takes out the hours portion from difference and the division (1000*60) returns the minutes (as 1000 * 60 is the number of milliseconds in a minute)
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    //format the time..and add 0 to begining
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
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