var functions = require('./functions');

console.log(functions.euroToStrerling(500));

(function () {
    var firstName = 'vikram';
    var lastName = 'gulia';
    console.log('Welcome ' + firstName + " " + lastName);
})();

// temperature function
console.log(functions.convertFtoC(86) === 30);
console.log(functions.convertFtoC(212) === 100);
console.log(functions.convertFtoC(32) === 0);
console.log(functions.convertFtoC(0) === -17.77777777777778);
console.log(functions.convertFtoC(Infinity) === Infinity);
console.log(isNaN(functions.convertFtoC('a')));

console.log(functions.largest(10, 12) === 12);

console.log(functions.findLongestWords(['a', 'ab', 'fedfsfdsdf', '3edqwed', 'sdfsdfd', 'sds', 'sfsdfdsfsdfsdf', 'sfsdf']));

/*
Objects tutorials
*/

var person = {};
person.firstName = "vikram";
person.lastName = "gulia";
console.log(person);
person.firstName = "vikas";
console.log(person);
console.log(person.firstName);
console.log(person['firstName']);

console.log(person.dumdum);

delete person.lastName;
console.log(person);

person.lastName = "gulia";
person.state = "CO";
person.city = "lone tree";

for(var str in person){
  console.log(person[str]);
}
var personStr = JSON.stringify(person);
console.log(personStr);
var newPerson = JSON.parse(personStr);
console.log(newPerson);

var dirObj = JSON.parse('{"items":[{"new_active_users":27,"total_users":5172734,"badges_per_minute":4.27,"total_badges":16896720,"total_votes":76457788,"total_comments":53573132,"answers_per_minute":4.54,"questions_per_minute":2.79,"total_answers":17991877,"total_accepted":6138141,"total_unanswered":2970063,"total_questions":11042422,"api_revision":"2016.1"}],"has_more":false,"quota_max":300,"quota_remaining":292}');
console.log(dirObj.has_more);
console.log(dirObj.items[0].new_active_users);
