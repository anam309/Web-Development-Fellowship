//Do these codes work same?
/* 
-> Code 1
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

-> Code 2
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);
*/

//The code will not return same value, code 1 returns false while code 2 returns true
//as == compares values while === strictly compares the types also
//Both can be right depending on the situation

//Correct Code
const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber == secondNumber;

console.log(result); //true