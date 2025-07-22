function solution(my_string) {
    let result = 0;
    for (let value of my_string){
        if(Number(value)){
            result += Number(value);
        }
    }
    return result;
}