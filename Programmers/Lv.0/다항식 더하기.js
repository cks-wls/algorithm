function solution(polynomial) {
    const arr = polynomial.split(' ').filter((val) => val !== '+');
    const x = [];
    const number = [];
    let xSum = 0;
    let numSum = 0;
    for (let value of arr){
        if (value.includes('x')){
            if (value === 'x'){
                x.push('1x')
            }else{
             x.push(value);   
            }
        }else{
            number.push(value);
        }
    }
    for (let value of x){
        let val = value.split('x').filter((a) => a !== '');
        xSum += Number(val[0]);
    }
    for (let value of number){
        numSum += Number(value);
    }
    if (xSum === 0){
        return numSum + '';
    }else if (numSum === 0){
        if (xSum === 1){
            return 'x';
        }else{
            return xSum + 'x';
        }
    }else{
        if (xSum === 1){
            return 'x' + ' + ' + numSum;
        }else{
            return xSum + 'x' + ' + ' + numSum;
        }
    }
}