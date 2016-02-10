/** js primitive types
 *
 * number
 * boolean
 * string
 * undefined
 * null
 *
 * you can use `typeof` to find the type of the variable/object.
 *
 * you can use JSLint to find syntax issues with js. visit github douglas cork bootstrap issue.
 */

console.log('Hello World');
console.log(typeof true);
console.log(typeof 'string');
console.log(typeof "string");

/**
 * declare a variable using var. going forward ECMA will use let and const for variables.
 *
 */

console.log('type of true is: ' + typeof true);
console.log('type of 0 is: ' + typeof 0);
console.log('type of "" is: ' + typeof "");
console.log('type of {} is: ' + typeof {});
console.log('type of [] is: ' + typeof []);
console.log('type of 0+"7" is: ' + typeof (0 + "7"));
console.log('type of function(){} is: ' + typeof function () {
    });
console.log('type of undefined is: ' + typeof undefined);
console.log('type of null is: ' + typeof null);
console.log('\nNumbers exercise');
console.log(3 / 4);
console.log(3 / 0);
console.log(-3 / 0);
console.log(0 / 0);
console.log(Infinity / Infinity);

console.log('it is \t');
console.log('it is \n');
console.log('it is \b');
console.log('it is \u03c0 (That’s zero three ‘c’ zero.)');

/*
 Numbers collected by prompt will be registered as string. Use parseInt to parse them in numbers if you want to use them as such.
 */

var str = 23 + 'skidoo';
console.log(str);
var val = 3 + '.1414';
console.log(val);
var seventeen = 17 + "bca"
console.log(typeof seventeen);
console.log(parseInt(seventeen));
console.log(Number(seventeen));

var sixteen = "16" - 0
console.log(typeof sixteen);

/*
 Operator plus truthy and falsey
 */

var limit = 'blah';
var length;
if (limit) {
    length = limit;
} else {
    length = 10;
}
// above code converts to below
var length2 = limit || 10;

console.log(length + " " + length2);

/*
 other use of operators - conditional execution
 */
var a = 10;
if (a) {
    console.log('a written: ' + a);
}
a = NaN;
// converts to
a && console.log('a written: ' + a);

/*
 Name thingy
 */
var name = "";
var alertName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
console.log("hello " + alertName);

/*
 Control flow
 */

// exercise 1-2
var i = 3;
while (i < 7) {
    console.log("i is now: " + i);
    i++;
}

// exercise 3
var hello = "hello, world";
var len = hello.length
var reverseHello = "";
for (var j = len; j >= 0; j--) {
    reverseHello = reverseHello + hello.charAt(j);
}
console.log(reverseHello);

/*
 Arrays
 */

var my = [10, 'vikram', true];
my.length = 10;
my = my.slice(1);

function isPrime(n) {
    for (var j = 2; j < n; j++) {
        if (n % j === 0)
            return false;
    }
    return true;
}

function isOdd(n) {
    if (n % 2 === 0)
        return false;
    return true;
}

var prime = [];
var odd = [];
for (var i = 0; i <= 100; i++) {
    if (isPrime(i))
        prime.push(i)
    if (isOdd(i))
        odd.push(i);
}

console.log(prime);
console.log(odd);

var queue = ['one', 'two', 'three'];
queue.unshift('zero');
queue.pop();
console.log(queue);

queue.push("four");
console.log(queue[queue.length - 1] === "four");
console.log(queue.pop() === "four");

var exam = [1, 2, 3, 4, 5, 10, 11, 12];
exam.splice(5, 0, 6, 7, 8, 9);
console.log(exam);

exam = [1, 2, 3, 4, 5, 'd', 'e', 'f', 10, 11, 12];
exam.splice(5, 3, 6, 7, 8, 9);
console.log(exam);

var conactArray = exam.concat(queue);
console.log(conactArray);

console.log("vikram".split('').reverse().join('') === "markiv");

var weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var weekDays = weekArray.slice(1, 6);
console.log(weekDays);