function solution(myString) {
    let result ='';
    for (let value of myString){
        if (value <= 'l'){
            result += 'l'
        }else{
            result += value;
        }
    }
    return result;
}