var hello = prompt("What is your name?");
var reverseHello = hello.split('').reverse().join('');
alert("Your reversed name is: " + reverseHello);

function isNullOrUndefined(arg) {
    return arg === null || arg === undefined;
}

for (; ;) {
    var number = Math.floor(Math.random() * 10 + 1);
    console.log("random num: " + number);
    var userNum = prompt("What number have i chosen (between 1 and 10)?");
    console.log("user selected: " + userNum);
    console.log(typeof userNum);
    if (String(userNum) === "" || isNaN(userNum) || isNullOrUndefined(userNum)) {
        alert("Game finished, not a vlaid number~~~");
        break;
    } else {
        userNum = parseInt(userNum);
        if (number === userNum) {
            alert("Congrats, You guessed it right!!!!");
            break;
        } else if (userNum > number) {
            alert("You guessed higher!!!");
        } else {
            alert("You guessed lower!!!");
        }
    }
}