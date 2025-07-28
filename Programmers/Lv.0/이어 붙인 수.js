function solution(num_list) {
    let oddNum = '';
    let evenNum = '';
    for (let value of num_list){
        if (Number(value) % 2 === 0){
            evenNum += value;
        }else{
            oddNum += value;
        }
    }
    return Number(oddNum)+ Number(evenNum);
}