function solution(x) {
    let toStr = x +'';
    let result = 0;
    for (let value of toStr){
        result += Number(value);
    }
    if (x % result === 0){
        return true;
    }else{
        return false;
    }
}