function solution(arr) {
    const result = [];
    for (let value of arr){
        if (value >= 50){
            if (value % 2 === 0){
                result.push(value/2);
            }else{
                result.push(value);
            }
        }else{
            if (value % 2 === 1){
                result.push(value*2);
            }else{
                result.push(value);
            }
        }
    }
    return result;
}