function solution(i, j, k) {
    let result = 0;
    for (let p = i; p <= j; p++){
        let h = p + '';
        let kStr = k + '';
        for (let value of h){
            if (value === kStr){
                result ++;
            }
        }
    }
    return result;
}