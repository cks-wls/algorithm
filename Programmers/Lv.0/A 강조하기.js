// solution 1
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
// solution 2
function solution(myString) {
    let result = '';
    for (let value of myString){
        if (value ==='a' || value === 'A'){
            result += 'A'
        }else{
            result += value.toLowerCase();
        }
    }
    return result;
}