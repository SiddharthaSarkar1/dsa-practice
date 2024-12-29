// Iterate Through the Keys of an Object with a for...in Statement

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let onlineUserCount = 0;
    for(let user in allUsers){
      if(allUsers[user].online === true){
        onlineUserCount++
      }
    }
    return onlineUserCount
    // Only change code above this line
  }
  
  console.log(countOnline(users));