var guestList = ["Matt", "Kate", "Diane", "John", "William"]

if (guestList.includes(prompt("What is your name?")) == true) {
    alert("Welcome!");

} else {
    alert("Sorry, maybe next time!");
}

//FIZZBUZZ
var output = [];
var counter = 1;
var num;

function fizzBuzz(num) {

    while (counter <= num) {
        if (counter % 3 == 0 && counter % 5 == 0) {
            output.push("FizzBuzz");
        } else if (counter % 3 == 0) {
            output.push("Fizz");
        } else if (counter % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(counter);
        }
        counter++
    }
    console.log(output);
}

//Bottles
var beerCount = 100;
function beer() {
    while(beerCount >= 0){
        if(beerCount == 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else if(beerCount == 2){
            console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer, " + "Take 1 down, pass it around, " + (beerCount - 1) + " bottle of beer on the wall.");
        } else if(beerCount == 1){
            console.log(beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer, " + "Take 1 down, pass it around, no more bottles of beer on the wall.");
        } else {
            console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer, " + "Take 1 down, pass it around, " + (beerCount - 1) + " bottles of beer on the wall.");
        }
        beerCount--;
    }
}

// Fibonacci Challenge

function fibonacciGenerator(n) {
    //TODO
    var first = 0;
    var second = 1;
    var fibonacciNumber = [];
    //iterate
    for (var i = 0; i < n; i++) {
        if ((i + 1) % 2 !== 0) {
            fibonacciNumber.push(first);
            first = first + second;
        } else {
            fibonacciNumber.push(second);
            second = second + first;
        }
    }
    //Return an array of fibonacci numbers.
    return fibonacciNumber;
}                  