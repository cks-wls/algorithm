function maxDivisor(a, b){
    let num = 0;
    
    for (let i = 1; i <= a; i++){
        if (a % i === 0 && b % i === 0){
            num = i;
        }
    }
    return num;
}
function factorization(x){
    const arr = [];
    let count = 0;
    for (let i = 1; i <= x; i++){
        for (let j = 1; j <= i; j++){
            if (i % j === 0){
                count ++;
            }
        }
        if (count <= 2){
            arr.push(i);
        }
        count = 0;
    }
    arr.shift();
    return arr;
}
function solution(a, b) {
    const maxNum = maxDivisor(a,b);
    b /= maxNum;
   const allPrime = factorization(b);
    const primeArr = [];
    let count = 0;
    while (b !== 1){
        let divided = false;
        for (let value of allPrime){
            if (b % value === 0){
                if (!primeArr.includes(value)){
                    primeArr.push(value);
                }
                b /= value;
                divided = true;
                break;
            }
        }
        if (!divided) break;
    }
    for (let value of primeArr){
        if (value !== 2 && value !== 5){
              count ++; 
        }
    }
    if (count >= 1){
        return 2;
    }else{
        return 1;
    }
}