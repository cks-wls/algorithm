// solution 1
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
// solution 2
function solution(num_list) {
    let lastNum = num_list[num_list.length -1];
    let objectNum = num_list[num_list.length -2];
    if (lastNum > objectNum){
        num_list.push(lastNum - objectNum);
    }else{
        num_list.push(lastNum * 2);
    }
    return num_list;
}