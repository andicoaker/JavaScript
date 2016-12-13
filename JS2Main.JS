var myName="Andi";

var firstNum = 2;
var secondNum = 3;
var sum = firstNum + secondNum;

function numPlusNum(a, b) {
  return a + b;
}

var sum = numPlusNum(firstNum, secondNum);

console.log(sum);
console.log(numPlusNum(9,10));

var Person = {
  firstName: "Bob",
  secondName: "Smith",
  fullName: Person.firstName + " " + Person.lastName,
  greeting: function () {
    console.log('Hello my name is ' + Person.fullName);
  }
}

var Bobby = {
  firstName: 'Bobby'
  lastName: 'Sam',
  hobbies: ['baseball', 'fishing',]
}

var Billy = {
  firstName: Billy,
  lastName: Smith,
  hobbies: ['baseball', 'fishing',]
}
