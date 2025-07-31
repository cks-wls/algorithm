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