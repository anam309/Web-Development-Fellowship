const myObj = {
    prop1: 'first value',
    prop2: 20
  };
  

  const myArray = [40, 50, 2];
  
  const result = myObj.prop2 === (myArray[0] / myArray[2]);
//myArray[0] -> 40
//myArray[2]-> 2
//myArray[0] / myArray[2] -> 40/2 -> 20
//Result -> true 