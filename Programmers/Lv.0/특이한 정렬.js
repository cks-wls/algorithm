function solution(numlist, n) {
    const object = {};
    const result = [];
    for (let value of numlist){
        object[value] = Math.abs(value - n);
    }
    const arr = Object.entries(object);
    arr.sort((a,b) => b[1] - a[1]);
    for (let i = arr.length -1; i >= 0; i--){
        result.push(Number(arr[i][0]));
    }
    return result;
}