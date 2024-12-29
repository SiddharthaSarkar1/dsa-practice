let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));


  let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods1.oranges;
  delete foods1.plums;
  delete foods1.strawberries;
  // Only change code above this line
  
  console.log(foods1);

//   Check if an Object has a Property

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if(userObj.hasOwnProperty("Alan") && userObj.hasOwnProperty("Jeff") && userObj.hasOwnProperty("Sarah") && userObj.hasOwnProperty("Ryan")){
      return true;
    }else{
      return false;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));