function solution(my_string, alp) {
    let result = '';
    for (let value of my_string){
        if (value === alp){
            result += value.toUpperCase();
        }else{
            result += value;
        }
    }
    return result;
}