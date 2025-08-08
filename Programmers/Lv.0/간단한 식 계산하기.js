// solution 1
function solution(binomial) {
    let a = '';
    let op = '';
    let b = '';
    let firstBlank = 0;
    for (let i = 0 ; i< binomial.length; i++){
        if (binomial[i] !== ' '){
            a += binomial[i];
            firstBlank ++;
        }else{
            break;
        }
    }
    op += binomial[firstBlank + 1];
    for (let j = firstBlank + 3; j < binomial.length; j++){
        b += binomial[j];
    }
    switch(op) {
        case '+' :
            return Number(a) + Number(b);
            break;
        case '-' :
            return Number(a) - Number(b);
            break;
        case '*' :
            return Number(a) * Number(b);
            break;
    }
}
// solution 2
function solution(binomial) {
    const arr = binomial.split(' ');
    let num1 = Number(arr[0]);
    let op = arr[1];
    let num2 = Number(arr[2]);
    return calculate(num1, op, num2);
}
function calculate (num1, op, num2){
    switch(op){
        case '+':
            return num1 + num2;
            break;
        case '-' :
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
    }
}