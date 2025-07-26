function solution(my_string, k) {
  let result = '';
    for (let i = 0; i < k ; i++){
        for(let value of my_string){
            result += value;
        }
    }
    return result;
}