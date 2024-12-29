function sumAll(arr) {
    let first = arr[0];
    let second = arr[1];
    let sum = 0;
    if(first > second){
      const temp = first;
      first = second;
      second = temp
    }
  
    for(let i=first; i<=second; i++){
      sum = sum + i;
    }
  
    return sum;
  }
  
  sumAll([1, 4]);
  sumAll([4, 1]);
  sumAll([10, 5]);