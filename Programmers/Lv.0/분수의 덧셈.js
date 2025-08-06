function solution(numer1, denom1, numer2, denom2) {
    const result  = [];
    let minimum = minimumMultiple(denom1, denom2);
    let firMultiple = minimum / denom1;
    let secMultiple = minimum / denom2;
    let top = numer1 * firMultiple + numer2 * secMultiple;
    let max = 0;
    if (minimum >= top){
        max = top;
    }else{
        max = minimum;
    }
    for (let i = max; i >= 1; i--){
        if (top % i === 0 && minimum % i === 0){
            top /= i;
            minimum /= i;
        }
    }
    result.push(top);
    result.push(minimum);
    return result;
}
function minimumMultiple(a,b){
    if (a % b === 0){
        return a;
    }else if (b % a === 0){
        return b;
    }else{
        return a * b;
    }
}