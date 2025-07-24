function solution(a, b) {
    let str = Number(String(a)+String(b));
    let num = 2* a * b;
    if (str >= num){
        return str;
    }else{
        return num;
    }
    
}