'use strict'
/*
 Functions training
 */

// re-usability
// consistency

var app = {};
app.euroToStrerling = function (euros) {
    var euro_gbp = this.getEuroToSterlingRate();
    return euro_gbp * euros;
};

app.getEuroToSterlingRate = function () {
    return 0.8057;
};

app.convertFtoC = function (temp) {
    if (temp === Infinity)
        return Infinity;
    if (isNaN(temp))
        return NaN;
    return ((temp - 32) * 5) / 9;
};

app.largest = function (num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
};

app.findLongestWords = function (arr) {
    if (Array.isArray(arr)) {
        var longestWordLength = 0;
        var longestWord;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > longestWordLength) {
                longestWord = arr[i];
                longestWordLength = arr[i].length;
            }
        }
        return longestWordLength;
    } else
        return 0;
};

module.exports = app;