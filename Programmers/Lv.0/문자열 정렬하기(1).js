function solution(my_string) {
    let result = [];
    for (let value of my_string){
        if (Number(value) === 0 || Number(value)){
            result.push(Number(value));
        }
    }
    return result.sort((a,b) => a-b);
}