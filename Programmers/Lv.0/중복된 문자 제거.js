function solution(my_string) {
    let result = '';
    for (let value of my_string){
        if (!result.includes(value)){
            result += value;
        }
    }
    return result;
}