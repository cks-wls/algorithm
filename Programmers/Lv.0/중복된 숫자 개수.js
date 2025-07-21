function solution(array, n) {
    let result = 0;
    for (let value of array){
        if (value === n){
            result ++;
        }
    }
    return result;
}