// Tried to make gradiant and cover responsive to sizes of the screen
function autoResizeDiv() {
  document.getElementById("main").style.height = window.innerHeight + 'px';
  document.getElementById("cover").style.height = window.innerHeight + 'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();




//Getting elements by Class to make them useful. Result is an array of those elements
let buttons = document.getElementsByClassName("balls");
// Not sure to say it in a coll way,
//but here we call a function with a specific parametr(number) when we click to specific element from our array
buttons[0].onclick = function() {clicked(0)};
buttons[1].onclick = function() {clicked(1)};
buttons[2].onclick = function() {clicked(2)};
buttons[3].onclick = function() {clicked(3)};

let current = 0; // current active button
let score = 0; //Score, after corect click +1 point
let pace = 1500; //speed
// The Function
// which was mentoined before.
function clicked(i) {
  console.log("Clicked i is ", i);
  if ( i != current) {
    myStopFunction(); //Reset timer, so it does not contine changing picture in my case
    gameOver(); // Calling a function to show small screen, my cover and end result
  } else {
    score++; //score = score +1
    pace = pace - 50; //Speed of changing. Less speed - fast change
    document.getElementById("score").innerHTML = score; //Show current score online
  }
}






//COMPONENT
function myStopFunction() {
  clearTimeout(timer); // a good method to reset timer
}

// Getting a random nummber (used when pick up number of an element to show the pic)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//Picking the number to show the pic
function pickNext() {
  let next = pickNew(current);
  //Here I say: one element show nice picture, other elements, be jsut white picture
  buttons[current].style.backgroundImage = "url('empty2.PNG')"; //
  buttons[next].style.backgroundImage = "url('beer1.jpg')"; //
  current = next;
  console.log("Current ", current);
  timer = setTimeout(pickNext, pace); // Calling function PickNext after each pace speed. Pace is a changing number (happens up)

  // S small condition to pick up new number to be a picture.
  //It should not be same as previous
  function pickNew(previous) {
    let next = randomNumber(0, 4);
    if (next != previous) {  //Cheking here
      return next;
    } else {
      return pickNew(previous); // if not same, calling function with that number as a parametr
    }
  }
}
//ending
function gameOver() {
  document.getElementById("showEnd").style.visibility = "visible"; // Show screen with results and info
  document.getElementById("cover").style.visibility = "visible"; // Show my cover
  document.getElementById("result").innerHTML = `You got ${score} liters.`; // Show end results
}

// The End
