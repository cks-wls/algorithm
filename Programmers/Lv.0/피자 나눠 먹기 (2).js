function solution(n) {
    let result = 1;
    const slice = 6;
    while (result * slice % n !==0){
        result ++;
    }
    return result;
}