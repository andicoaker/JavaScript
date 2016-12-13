
/*=========================================================
    Part 1: Variables
*/
var givenName;
console.log(givenName);
// Q: What value is stored in `givenName` right now?
// A: undefined


givenName = "Brett";
console.log(givenName);
// Q: What is `givenName` set to now?
// A: Brett


givenName = givenName;
console.log(givenName);
// Q: What is `givenName` set to now?
// A: Brett


//exercise 2//

var greeting = "Hello, how are you ";
console.log(greeting + givenName + "?");


//exercies 3//

/*=========================================================
     Part 2: Simple Math
*/
var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: 45

// Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
// Write Code Below:
var math = high + low;
console.log(math);
// A: 60
var math = high * low;
console.log(math);
// A: 500
var math = high / low;
console.log(math);
// A: 5


// exercise 4 //
/* =========================================================
     Part 3: Expressions
*/


// Create a variable to calculate your age
// The answer should read "NAME is XX years old"
// The answer should not be written in a comment.
var born = 1977;
var today = 2016;

// Answers Below:
var age = today - born;
var yourName = 'Andi';
console.log(age);
console.log(yourName + ' is ' + age + ' years old');


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = 'Andi';
var instructorName = 'Brandon';

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

//** Exercise 5**//

if(age > 100) {
    console.log(this is True)
    

  } else {

  }

}


//** Exercise 6**//

var firstName = "Julia ";
var lastName = "Roberts";
var fullName = firstName + lastName;
console.log(fullName);

var yearBorn = 1975;
var currentYear = 2016;
var age = currentYear - yearBorn;
console.log(age);
