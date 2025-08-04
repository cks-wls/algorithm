function factorial(n) {
    let result = 1n;  
    for (let i = 1n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

function solution(balls, share) {
    return Number(
        factorial(balls) /
        (factorial(balls - share) * factorial(share))
    );
}
