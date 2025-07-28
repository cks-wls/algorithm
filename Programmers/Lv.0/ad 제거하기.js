function solution(strArr) {
    const result = [];
    for (let value of strArr){
        if(!value.includes('ad')){
            result.push(value);
        }
    }
    return result;
}