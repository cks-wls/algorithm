function solution(my_string) {
    const result = my_string.split (" ");
    const answer = [];
    for (let value of result){
        if (value !== ''){
            answer.push(value);
        }
    }
    return answer;
}