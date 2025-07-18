function solution(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1 ; j <= numbers.length; j++){
            let value1 = numbers[i];
            let value2 = numbers[j];
            let result = value1 * value2;
            if(result > max){
                max = result;
            }
        }
    }
    return max;
}