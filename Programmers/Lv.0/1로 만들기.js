function solution(num_list) {
    let result = 0;
    for (let value of num_list){
        while (value !== 1){
            if (value % 2 === 0){
                value /= 2;
                result ++;
            }else{
                value = (value -1)/2;
                result ++;
            }
        }
    }
    return result;
}