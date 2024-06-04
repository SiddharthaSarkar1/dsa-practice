const arr = [1, 4, 6, 9, 12, 15];

const binarySearch = (arr, target) => {
    let start = 0, end = arr.length -1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2)

        if(arr[mid] === target){
            return arr[mid];
        }else if(arr[mid] > target){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return -1;
}

console.log(binarySearch(arr, 6))
console.log(binarySearch(arr, 25))

