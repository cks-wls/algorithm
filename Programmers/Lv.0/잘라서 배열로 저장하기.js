function solution(my_str, n) {
    const result = [];
    let str = '';
    for (let i = 0; i < my_str.length; i++){
        if (i !== my_str.length-1){
            if (i % n !== n-1){
                str += my_str[i];
            }else{
                str += my_str[i];
                result.push(str);
                str = '';
            }   
        }else{
            str += my_str[i];
            result.push(str);
        }
    }
    return result;
}