function solution(myString) {
    let result = '';
    for(let i = 0 ; i < myString.length; i++){
        result += myString[i].toUpperCase();
    }
    return result
}