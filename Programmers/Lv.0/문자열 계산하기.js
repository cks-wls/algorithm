function solution(my_string) {
    let plus = 0;
    let minus = 0;
    const question = my_string.split(" ")
    for (let i = 0; i < question.length; i++){
        if (question[i] !== '+' && question[i] !== '-'){
            plus += Number(question[i])
        }else{
            if (question[i] === '-'){
                minus += Number(question[i+1]);
            }
        }
    }
    return (plus - minus * 2)
}