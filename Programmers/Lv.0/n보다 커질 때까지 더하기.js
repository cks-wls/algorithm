function solution(numbers, n) {
    let result = 0;
    for (let value of numbers){
        if (result <= n){
            result += value;
        }
    }
    return result;
}