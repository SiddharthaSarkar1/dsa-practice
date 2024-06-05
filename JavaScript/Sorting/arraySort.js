const arr = [-2, -7, 45, 295, 32, -122, 9, -12, 1000, 5]
console.log(arr.sort()) // -2, -7, 1000, 5
console.log(arr.sort((a, b) => a - b)) // -7, -2 , 5, 1000
console.log(arr.sort((a, b) => b - a)) // 1000, 5, -2, -7

const strArr = ["mango", "apple", "banana", "coconut", "kiwi", "pineapple"]
console.log(strArr.sort()) // "apple", "banana", "mango"