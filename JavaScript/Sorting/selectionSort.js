function selectionSort(arr){

    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex] ){
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }

    return arr;
}

const numbers = [5, 3, 1, 8, 2, 4];
console.log(selectionSort(numbers))
