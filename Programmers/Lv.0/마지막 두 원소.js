function solution(num_list) {
    const result = [];
    for (let i = 0; i < num_list.length; i++){
        let last = num_list.length;
        result.push(num_list[i]);
        if(i === last - 1){
            if (num_list[last - 1] > num_list[last - 2]){
                result.push(num_list[last-1]  - num_list[last - 2]);
            }else{
                result.push(num_list[last-1] * 2);
            }
        }    
    }
    return result;
    
}