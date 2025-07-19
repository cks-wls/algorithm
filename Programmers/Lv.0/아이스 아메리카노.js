function solution(money) {
    const result = [];
    let iceNumber = Math.floor(money/5500);
    let remainMoney = money - iceNumber*5500;
    
    result.push(iceNumber);
    result.push(remainMoney);
    return result;    
}