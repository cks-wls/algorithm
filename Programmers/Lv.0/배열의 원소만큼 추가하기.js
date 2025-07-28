function solution(arr) {
    const result = [];
    for (let value of arr){
        for(let i = 0; i < value; i++){
            result.push(value);
        }
    }
    return result;
}