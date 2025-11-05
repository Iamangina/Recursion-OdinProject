// Iteration
let num;
function fibs(num){
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i < num; i++){
        arr[i] = arr[i-1]+arr[i-2];
    } return arr;
}

console.log('Iteration');
console.log(fibs(5));

// Recursive
function fibsRec(num, arr = [0,1]){
    if(num === 0)return [];
    if(num === 1)return [0];
    if(num === 2)return [0,1];
    if(arr.length < num){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return fibsRec(num, arr);
    } return arr;
}

console.log('Recursive');
console.log(fibsRec(6));