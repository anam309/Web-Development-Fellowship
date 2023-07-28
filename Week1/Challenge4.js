/*const objectVariable = {
    property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
  };
  
  console.log(objectVariable.property3[2]);*/

  //Why is this invalid?
  //It contains semi-colons after every property but in dictionaries, we use semi-colon after defining all properties
  //and use comma after every property

  //Correct Code
  const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
  };
  
  console.log(objectVariable.property3[2]);