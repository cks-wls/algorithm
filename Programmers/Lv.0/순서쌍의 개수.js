function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
         for (let j = 1; j <= n ; j++){
            if (i * j === n){
                result ++;
            }
        }   
        }
    }
    return result;
}