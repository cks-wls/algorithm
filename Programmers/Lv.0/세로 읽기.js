function solution(my_string, m, c) {
    const result =[];
    let str = '';
    for (let i = 0; i < m; i++){
        for (let j = i; j < my_string.length; j += m){
            str += my_string[j]; 
        }
        result.push(str);
        str = '';
    }
    return result[c-1];
}