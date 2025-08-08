// solution 1
function solution(arr) {
    let result = '';
    for (let value of arr){
        result += value;
    }
    return result;
}
// solution 2
function solution(arr) {
    return arr.join('');
}