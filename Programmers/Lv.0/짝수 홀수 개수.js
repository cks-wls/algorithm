function solution(num_list) {
    let evenNum = 0;
    let oddNum = 0;
    for (let value of num_list){
        if (value % 2 === 0){
            evenNum += 1;
        }else{
            oddNum += 1;
        }
    }
    return [evenNum, oddNum];
}