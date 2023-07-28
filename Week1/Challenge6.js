const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

//Why does this doesnt work?
//This code will not work as const variable cannot be reassigned a value hence we cannot increment 
//Correct code

let numberVariable2 = 0;

numberVariable2++;
numberVariable2++;
numberVariable2++;

console.log(numberVariable2);