function solution(arr, k) {
    const result = [];
    const notSame = [];
    for (let value of arr){
        if (!notSame.includes(value)){
            notSame.push(value);
        }
    }
    for (let i = 0; i < k; i++){
        if (i >= notSame.length){
            result.push(-1)
        }else{
            result.push(notSame[i])
        }
    }
    return result;
}