function solution(my_string, letter) {
    let result = '';
    for(let value of my_string){
        if(value != letter){
            result += value;
        }
    }
    return result;
}