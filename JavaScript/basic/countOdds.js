//1523. Count Odd Numbers in an Interval Range

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let oddNoCount = 0;

    for(let i=low; i<=high; i++){
        if(i !== 0 && i%2 !== 0){
            oddNoCount++
        }
    }
    return oddNoCount;

};