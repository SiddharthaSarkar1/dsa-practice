// Question - 1: sum of all natural numbers from 1 to n

function sumOfNaturalNumber(num) {
    let sum = 0;

    for(let i=0; i<num; i++){
        sum = sum + i;
    }

    return sum;
}

console.log(sumOfNaturalNumber(123));
console.log(sumOfNaturalNumber(15));
console.log(sumOfNaturalNumber(37));