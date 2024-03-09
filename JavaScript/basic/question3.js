// Question - 3: Count the number of digits of a number 

function countNumberOfDigits(number) {
    let count = 0;
    
    let num = Math.abs(number);

    while( num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

const number = 13059;
const result = countNumberOfDigits(number);
console.log(result);
const result2 = countNumberOfDigits(-368)
console.log(result2);