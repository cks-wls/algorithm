function solution(num_list, n) {
    for (let value of num_list){
        if (num_list.includes(n)){
            return 1;
        }else{
            return 0;
        }
    }
}