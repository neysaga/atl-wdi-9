// // General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// // Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// // See LICENSE for details.

// /// Data & Core Business Logic ///
// const Stopwatch = {
//   tickClock: function(){
//     if (Stopwatch.isRunning) {
//       setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
//       Stopwatch.advanceTenMillisecs();
//       AppController.handleClockTick();
//     }
//   },
//   isRunning: false,
//   mins: 0,
//   secs: 0,
//   millisecs: 0,
//   laps: [],
//   // DO NOT EDIT ABOVE THIS LINE
//   advanceTenMillisecs: function(){
//     // Your Code Here
//   },
//   reset: function(){
//     // Your Code Here
//   },
//   start: function(){
//     // Your Code Here
//   },
//   stop: function(){
//     // Your Code Here
//   },
//   lap: function(){
//     // Your Code Here
//   }
// };

// /// User Interface ///
// const ViewEngine = {
//   updateTimeDisplay: function(mins, secs, millisecs){
//     // Your Code Here
//   },
//   updateLapListDisplay: function(laps){
//     // Your Code Here
//   },
// };
// const ViewHelpers = {
//   zeroFill: function(number, length){
//     // Your Code Here
//   },
// };

// /// Top-Level Application Code ///
// const AppController = {
//   handleClockTick: function(){
//     // Your Code Here
//   },
//   handleClickStart: function() {
//     // Your Code Here
//   },
//   handleClickStopReset: function(){
//     // Your Code Here
//   },
//   handleClickLap: function(){
//     // Your Code Here
//   }
// };

// window.onload = function(){
//   // Attach AppController methods to the DOM as event handlers here.
// };
// Code goes here
$(document).ready(function){
  var start = 'start',
  var stop = 'stop',
  var reset = 'reset',
  var milliSeconds = 0,
  var seconds = 0,
  var minutes = 0,
  var hours = 0
  var x;
}

function add() {
  milliSeconds ++;
  if (milliSeconds >= 100) else {
    milliSeconds = 0;
    seconds ++; 
  }
}
    
function add() {
  seconds ++; 
  if (seconds >= 60) else {
    seconds = 0;
    minutes ++;
  }
}
function add() {
    minutes ++;
  if (minutes >= 60) else {
    minutes = 0;
    hours ++ ;
  }
}
function startTimer() {
  x = setTimeOut (add, 10);
};

function stopTimer() {
  clearTimeOut(x);
}
function resetTimer() {
  timedisplay.html("00:00:000")
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}
{
start.click(startTimer)
stop.click(stopTimer)
reset.click(resetTimer);
}


