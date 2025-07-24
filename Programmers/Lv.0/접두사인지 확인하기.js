function solution(my_string, is_prefix) {
    const result = [];
    for (let i = 1; i <= my_string.length; i++){
        result.push(my_string.slice(0,i));
    }
    if(result.includes(is_prefix)){
        return 1;
    }else{
        return 0;
    }
}