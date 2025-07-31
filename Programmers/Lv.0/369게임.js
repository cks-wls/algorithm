function solution(order) {
    let strOrder = order.toString();
    let result = 0;
    for (let value of strOrder){
        if (value === '3' || value === '6' || value === '9'){
            result ++;
        }
    }
    return result;
}