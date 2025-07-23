function solution(my_string) {
    let result = '';
    for (let value of my_string){
        if(value > value.toUpperCase()){
            result += value.toUpperCase();
        }else{
            result += value.toLowerCase();
        }
    }
    return result;
}