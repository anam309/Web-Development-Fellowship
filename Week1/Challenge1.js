//Challenge 1
// 1 Create Boolean variable and set it to true
const myBoolean = true;

// 2 Create string variable and set to hello world
const myString = 'hello world';

// 3 Create number variable and set to 20
const firstNumber = 20;

// 4 Create number variable and set to 40
let secondNumber = 40;
//const secondNumber = 40

// 5 Re-assign secondNumber to 80
secondNumber = 80;

// 6 Creat an array and put boolean variable at index 0 and string variable to index 1
const myArray = [myBoolean, myString];

// 7 Create object and assign array to its first property and sum of number variables to its second property
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

// 8 Print object 
console.log(myObject);

// 9 print sum property of object
console.log(myObject.sumProperty);


// 10 Print value at index 1 of first property of object
console.log(myObject.firstProperty[1]);
