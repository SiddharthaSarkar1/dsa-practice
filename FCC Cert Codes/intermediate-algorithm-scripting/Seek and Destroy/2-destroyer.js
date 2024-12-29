function destroyer(arr){
    for (let i = 0; i < args.length; i++) {
        arr = arr.filter(element => element !== args[i])
    }
    return arr;
}

const args =  [2, 3];

console.log(destroyer([1, 2, 3, 1, 2, 3]));
