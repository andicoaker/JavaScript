

// Knowledge Based

// Student can explain the phrase: “zero indexed”
      // This refers to the first item in an Array - it will be set to 0.
// Student can explain how the Window object is connected to all JavaScript objects in an active web page
      //  The Window object contains everything within the entire browser.

// Questions

// 1) When looking at an array, do we say the first element is at position 1? Why or why not?
        //  No, the first element is set to 0

// 2)  Look at the following array and answer the following:
        //  Which name is at position 2 - names[2]? Peter
        //  Which name is at position 0 - names[0]? Sam
        //  Which name is at position 5 - names[5]? none - only 0-4 available
        //  var names = ["Sam", "Jessica", "Peter", "Mason", "Eric"];

//  3)  If I opened up the Chrome console and ran the following line of code, what object does the variable firstName get attached to? Explain your answer.
        //  var firstName = "Princess";
        //  It's running as Undefined - there are no {} to attched to "Princess"

//SKILL Based

//Exercise 1

var animal = {
  location: "Wildlife Trust",
};

  animal.name = "Elle";
  animal.age = 6;
  animal.food = ["tomatoes", "corn on the cob"];
  animal.hobbies = ["laying in the sun", "swimming in the pond"];
console.log(animal);

//Exercise 2


var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

// Log the price
console.log(productData.price);
// Log the title
console.log(productData.title);
// Log the third tag listed in tags beer mug
console.log(productData.tags[2]);
// Log the image URL.
console.log(productData.image);
// Log the first category Vintage
console.log(productData.category_path[0]);

//Exercise 3

//Copy the following block of code to your main.js file and write 2 statements for each function and log the results.

// Get the sum of two numbers
function sum (x, y) {
  return x + y;
}
console.log(sum(5, 5));
console.log(sum(100, 50));

// Find the largest of two numbers
function max(a, b){
  var largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  return largest;
}

console.log(max(40, 50));
console.log(max(70, 5));

//Exercise 4

// Take a look at the following code example and fix the errors so that the function returns the proper answer (10).

function math (num1, num2, operator) {
  var answer;

  if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "-") {
    answer = num1 - num2;
  } else if (operator === "/") {
    answer = num1 / num2;
  } else if (operator === "*") {
    answer = num1 * num2;
  }

  return answer;

}

console.log(math(5, 2, "+")); // 7
console.log(math(5, 2, "-")); // 3
console.log(math(5, 2, "*")); // 10
console.log(math(5, 2, "/")); // 2.5
