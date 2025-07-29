function solution(n) {
    const result = [];
    let str = '';
    n += str;
    for (let value of n){
        result.unshift(Number(value));
    }
    return result;
}
