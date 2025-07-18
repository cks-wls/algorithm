function solution(n) {
    let result = 0;
    let numToString = String(n);
    for (let value of numToString){
        result += Number(value);
    }
    return result;
}