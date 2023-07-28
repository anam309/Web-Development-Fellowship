const expression1 = 100 % 50; //0 (modulus operator)
const expression2 = 100 / 50; //2 (division)
const expression3 = expression1 < expression2; //true 
const expression4 = expression3 && 300 + 5 === 305; //true as both are true
const expression5 = !expression4; //false (inverter)

console.log(expression5);

//What does expression5 evaluate to? How could you write this in a single line of code?
//Expression5 evaluates to false

//in a single line (although its better to write in separate lines):
//const expression5 = (!((100 % 50)<(100 / 50))&& (300 + 5 === 305));