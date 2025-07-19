function solution(n, numlist) {
    const result = [];
    for (let value of numlist){
        if (value % n === 0){
            result.push(value);
        }
    }
    return result;
}