// solution 1
function solution(my_string) {
    const result = [];
    let str = '';
    for (let i = 0; i < my_string.length; i++){
        if (i !== my_string.length - 1 ){
            if (my_string[i] !== ' '){
                str += my_string[i];
            }else{
                result.push(str);
                str = '';
            }
        }else{
            str += my_string[i];
            result.push(str);
        }
    }
    return result;
}
// solution 2
function solution(my_string) {
    const result = my_string.split(' ');
    return result;
}