// EXERCISE 1

// The below function does not work. The variable twoPlusTwo gets set to undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);
console.log(twoPlusTwo) // 4

// EXERCISE 2

// Write a function called yell that logs out an uppercase version of a string.
// Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

function yell(x) {
  return x;
}
var tricky = yell("js is tricky!");
var result = tricky.toUpperCase();
console.log(result);

function yell10 {
  for(var i = 0; i < 10; i++) {
    ???;
  }
}
  console.log(i);



  // EXERCISE 3

  //Write a function called longest that returns the longest of two input strings or arrays.

  function longest(param1, param2) {
    var lengthone = param1.length;
    var lengthtwo = param2.length;

    if(lengthone > lengthtwo) {
      return param1;
    } else if (lengthone < lengthtwo) {
      return param2;
    } else {
      return "lengths are the same";
    }
  }



  // EXERCISE 4

  // Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.

  function isVowel(oneChar) {
    var vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    if(vowelArray.indexOf(oneChar) !== -1);

    console.log(vowelArray.indexOf(oneChar));

  }

  isVowel('a');
  isVowel('A');
