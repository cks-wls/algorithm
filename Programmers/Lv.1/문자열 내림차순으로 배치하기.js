function solution(s) {
    const arr = [];
    let result ='';
    for (let value of s){
        arr.push(value);
    }
    arr.sort().reverse();
    for (let value of arr){
        result += value;
    }
    return result;
}