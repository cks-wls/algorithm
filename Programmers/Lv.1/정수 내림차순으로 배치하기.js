// solution 1
function solution(n) {
    const arr = [];
    let str = n +'';
    let result = '';
    for (let value of str){
        arr.push(value);
    }
    arr.sort((a,b) => b-a);
    for (let value of arr){
        result += value;
    }
    return Number(result);
}
// solution 2
function solution(n) {
    const result = String(n).split('');
    result.sort((a,b) => b-a);
    let answer = result.join('');
    return Number(answer);
}