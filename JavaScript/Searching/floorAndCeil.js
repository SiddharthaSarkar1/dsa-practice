// Find floor and ceil value of X in an array

const arr = [1, 4, 5, 6, 7, 9, 12, 15];

const floorAndCeil = (arr, target) => {
    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === target){
            floor = mid;
            ceil = mid;

            return[ceil, mid]
        }else if(arr[mid] > target){
            ceil = mid;
            end = mid - 1;
        }else{
            floor = mid;
            start = mid + 1
        }
    }

    return [ceil, floor];

}

console.log(floorAndCeil(arr, 7))
console.log(floorAndCeil(arr, 12))