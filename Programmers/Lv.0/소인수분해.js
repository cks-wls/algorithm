function solution(n) {
    const demical = [];
    const result = [];
    for (let i = 1; i <= n; i++){
        let count = 0;
        for (let j = 1; j <= i; j++){
            if (i % j === 0){
                count ++;
            }
        }
        if (count === 1 || count === 2){
            demical.push(i);
        }
    }
    demical.shift();
    while (n !== 1){
        for(let value of demical){
            if(n % value === 0){
                if (!result.includes(value)){
                    result.push(value);
                }
                n /= value;
            }
        }
    }
    return result;
}