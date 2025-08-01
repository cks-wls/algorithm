function solution(myString, pat) {
    let result = 0;
    let str = '';
    for (let i = 0; i < myString.length; i++){
        for (let j = i; j < i + pat.length ; j++){
            str += myString[j];
        }
        if (str === pat){
            result ++;
        }
        str = '';
    }
    return result;
}