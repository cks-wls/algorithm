function solution(array) {
    let result = 0;
    let str = array.join('');
    for (let value of str){
        if (value === '7'){
            result ++;
        }
    }
    return result;
}