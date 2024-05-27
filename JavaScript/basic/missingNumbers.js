//268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;

    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }

    return (nums.length*(nums.length+1)/2) - sum;

    //One liner solution
    // return (nums.length*(nums.length+1)/2) - nums.reduce((acc, num) => num + acc);

};