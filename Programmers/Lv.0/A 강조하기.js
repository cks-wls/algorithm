function solution(myString) {
    let result = '';
    for (let value of myString){
        if (value === 'a'){
            value = 'A';
            result += value;
        }else if (value !== 'A' && (value === value.toUpperCase())){
            result += value.toLowerCase();
        }else {
            result += value;
        }
    }
    return result;
}