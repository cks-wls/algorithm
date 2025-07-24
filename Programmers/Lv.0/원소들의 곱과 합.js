function solution(num_list) {
    let mul = 1;
    let sum = 0;
    for (let value of num_list){
        mul *= value;
        sum += value;
    }
    if(sum**2 > mul){
        return 1;
    }else{
        return 0;
    }
}