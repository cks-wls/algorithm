function solution(num_list) {
    let result = 0;
    if(num_list.length >= 11){
        for (let value of num_list){
            result += value;
        }
    }else{
        result = 1;
        for (let value of num_list){
            result *= value;
        }
    }
    return result;
}