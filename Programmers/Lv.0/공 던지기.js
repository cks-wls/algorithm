function solution(numbers, k) {
    let orderIndex = 0;
    let count = 1;
    while(count !== k){
        if (orderIndex + 2 >numbers.length -1){
            orderIndex = orderIndex + 2 - numbers.length;
        }else{
            orderIndex += 2;    
        }
        count ++;
    }
    return numbers[orderIndex];
}