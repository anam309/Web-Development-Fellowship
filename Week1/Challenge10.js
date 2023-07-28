const myObj = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray = [myObj.nestedObject1, myObj.nestedObject2];
  
  const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 
  //What does result evaluate to?
  //myArray[0].price -> myObj.nestedObject1.price -> 100
  //myArray[0].quantity ->myObj.nestedObject1.quantity -> 5
  //myArray[0].price * myArray[0].quantity -> 100*5 -> 500

  //myArray[1].price -> myObj.nestedObject2.price -> 150
  //myArray[1].quantity ->myObj.nestedObject2.quantity -> 2
  //myArray[1].price * myArray[0].quantity -> 100*5 -> 300

  //result-> 500>300 -> true
