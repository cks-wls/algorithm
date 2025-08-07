// solution 1
function solution(numbers, num1, num2) {
    const result = [];
    for (let i = num1; i <= num2 ; i++){
        result.push(numbers[i]);
    }
    return result;
}
// solution 2
function solution(numbers, num1, num2) {
    const result = numbers.slice(num1, num2+1);
    return result;
}