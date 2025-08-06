function solution(quiz) {
    const resultArr = [];
    for(let value of quiz){
        let cal = value.split(' ');
        let firNum = Number(cal[0]);
        let operator = cal[1];
        let secNum = Number(cal[2]);
        let result = Number(cal[4]);
        if (operator === '+'){
            if (firNum + secNum === result){
                resultArr.push('O');
            }else{
               resultArr.push('X'); 
            }
        }else{
            if (firNum - secNum === result){
                resultArr.push('O');
            }else{
                resultArr.push('X');
            }
        }
    }
    return resultArr;
}