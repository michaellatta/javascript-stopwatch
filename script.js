// Define vars to hol time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stopwatch function (logic to determine when to increment next value, etc.)

function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    for (;;) {
        seconds++;
        console.log(seconds);
    }
}