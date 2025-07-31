function solution(my_string, is_suffix) {
    const result = [];
    for (let i = 0; i < my_string.length; i++){
        let str = '';
        for (let j = i; j < my_string.length; j++){
            str += my_string[j];
        }
        result.push(str);
    }
    if (result.includes(is_suffix)){
        return 1;
    }else{
        return 0;
    }
}