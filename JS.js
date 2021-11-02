// Number 1
function isAnArray(arg){
    let result = Array.isArray(arg);
    return result;
}
// Number 2
function clonedArr(arg) {
    let clone = [];
    for (let i = 0; i < arg.length; i++) {
        clone[i] = arg[i];
    }
    return (arg, clone);
}
// or
function clonedArr(arg) {
    let clone = [...arg];
    return (arg, clone);
}
// Number 3
function last(arr,n){
    let endArr = arr.slice(arr.length - n);
    return endArr;
}

// Number 5
function remove(arr,n){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
// Number 6
function numberOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== 'number') {
            arr.splice(i, 1);
        }
    }
    return arr;
}
// or
function numberOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) === false) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
//  or 
function numberOnly(arr) {
    let numberList = [] 
    for (let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i]) === true) {
            numberList.push(arr[i]);
        }
    }
    return numberList;
}

//  Number 4
function printNumber(arr) {
    let newArr = [];
    let newNArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newNArr[j] = arr[i][j];
        }
        newArr[i] = [...newNArr];
    }    
    return newArr;
}