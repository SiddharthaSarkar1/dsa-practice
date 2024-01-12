// Quostion - 2: Sum of digits of a number

function sumOfDigits(number){
    let sum = 0;
    let num = Math.abs(number);

    while(num > 0) {
        sum = sum + num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

const number = 176459;
const result = sumOfDigits(number);
console.log(result);
console.log(`Sum of digits of ${number} is ${result}.`);