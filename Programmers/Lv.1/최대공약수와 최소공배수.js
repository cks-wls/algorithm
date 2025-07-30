function solution(n, m) {
    let maxDivisor = 0;
    let minMultiple = 1;
    const result = [];
    let maxNum = 0;
    if (n >= m){
        maxNum = n;
    }else{
        maxNum = m;
    }
    for(let i = 1; i <= maxNum; i++){
        if (n % i === 0 && m % i === 0){
            maxDivisor = i;
        }
    }
    while (true){
        if (minMultiple % n !== 0 || minMultiple % m !== 0){
            minMultiple ++;
        }else{
            break;
        }
    }
    result.push(maxDivisor);
    result.push(minMultiple);
    return result;
    
}