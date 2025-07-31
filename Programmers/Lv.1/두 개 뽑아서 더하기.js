function solution(numbers) {
    const result = [];
    const answer = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = i+1 ; j < numbers.length; j++){
            result.push(numbers[i] + numbers[j]);
        }
    }
    result.sort((a,b) => a-b);
    for (let value of result){
        if (!answer.includes(value)){
            answer.push(value);
        }
    }
    return answer;
}