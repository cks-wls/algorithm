function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++){
        result ++;
        let str = result + '';
        while(result % 3 === 0 || str.includes('3')){
            if (result % 3 === 0){
                result ++;
            }
            str = result + '';
            if (str.includes('3')){
                result ++;
            }
            str = result + '';
        }
        }
    return result;
}