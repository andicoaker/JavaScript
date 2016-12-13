var answerOne = prompt ('Are you ready to begin? Type yes or no');

console.log(answerOne);

if(answerOne === 'yes' || answerOne.toLowerCase() === 'ok') {
  console.log('Adventure is ready to begin!');

  var answerTwo = prompt ('Which adventure would you like? 1: Sea 2: Desert or 3: Mountains?');

    if (answerTwo.toLowerCase() === 'sea' || answerTwo == 1) {
      console.log('You chose Sea!');
    } else if (answerTwo.toLowerCase() === 'desert' || answerTwo == 2) {
      console.log('You chose Desert!');
    } else {
      console.log('You made a poor choice!');
    }

} else if(answerOne === 'maybe') {
  console.log('You better make up your mind!');
} else {
  console.log ('See ya!');
}


//* Homework - create CYOA with 3 questions and 3 diff endings *//
