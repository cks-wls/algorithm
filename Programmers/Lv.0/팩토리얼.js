function solution(n) {
    let factorial = 1;
    let i = 0;
    if (n === 1 ){
        return 1;
    }else{
     while (true){
        if (factorial < n){
            i ++;
            factorial *= i;
        }else if (factorial === n){
            return i;
            break;
        }else{
            i = i-1;
            break;
        }
    }   
    }
    return i;
}