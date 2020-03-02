function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numBottles = Math.floor(money / 1.5);
    console.log("buy " + numBottles + " bottles of Milk");
    console.log("moveLeft")
    console.log("moveLeft")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveLeft")
    console.log("moveLeft")
    console.log("enterHouse")
    return money % 1.5;
}

prompt("What is you name?")
prompt("What is their name?")

function loveCalculator() {
    var love = Math.random();
    var lovePer = Math.round(love * 100);
    return "Your love score is " + lovePer + "%";
}

function bmiCalculator(weight, height) {
    var bmi = Math.round(10 * (weight / Math.pow(height, 2))) / 10;
    var interpretation;
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi <= 24.9 && bmi >= 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}
