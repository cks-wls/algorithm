function solution(num, k) {
    let result = 0;
    let newNum = num + '';
    for (let i = 0; i < newNum.length; i++){
        if (Number(newNum[i])!==k){
            result = -1;
        } else{
            result = i + 1;
            return result;
        }
    }
    return result;
}