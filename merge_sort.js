function mergeSort(arr){
     if (arr.length <= 1){
        return arr;
     }
        let middle = Math.floor(arr.length/2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));  
}

function merge(left, right){
    const result = [];
    let i = 0, j = 0;

  for (; i < left.length && j < right.length;) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  } return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log('Merge Sort');
console.log(mergeSort([3,2,5,7,1]));