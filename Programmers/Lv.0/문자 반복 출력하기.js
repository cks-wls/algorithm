function solution(my_string, n) {
    let result = '';
    for (let value of my_string){
        for (let i = 0 ; i < n ; i++){
            result += value;
        }
    }
    return result;
}