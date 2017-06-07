// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    // Your answer here
if (num1 > num2) {
  return num1;}
  else if (num2 > num1){

  return num2;}
}



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    // Your answer here
if (num1 > num2 || num1 > num3){
  return num1;}
  else if (num2 > num1 || num2 > num3) {
  return num2;}
  else if (num3 > num1 || num3 > num2) {
  return num3;
  }

}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(string1){
    // Your answer here
if (string1 === a || string1 === e || string1 === i|| string1 === o || string1 === u){
  return true;
}
else {return false;}


}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
 function sum (num1, num2) {
  return num1 + num2;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num1, num2, num3) {
  return (num1 + num2 + num3)/(3);


}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength (value){
  return value.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
var evaluateGreaterThan = function(num1, num2) {
  if (num1 < num2)
  return true;
  else{
    return false;
  }
}






// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
  return "Hello "+ name
}
console.log(greet("Grant"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(word1, word2, word3, word4, word5){
  return "The "+ word1 + " added "+ word2 + " our "+ word3 +" help "+ word4 + " these "+ word5 +" ."

}

console.log(madlib("words", "to","lesson", "solve", "functions"));
