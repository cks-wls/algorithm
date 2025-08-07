// solution 1
function solution(array) {
    const result = [];
    let max = 0;
    let maxIndex = 0;
    for (let value of array){
        if (value >= max){
            max = value;
            maxIndex = array.indexOf(max);
        }
    }
    result.push(max);
    result.push(maxIndex);
    return result;
}
// solution 2
function solution(array) {
    const arr = array.slice();
    arr.sort((a,b) => b-a);
    let max = arr[0];
    return [arr[0], array.indexOf(arr[0])];
}