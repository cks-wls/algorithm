// solution 1
function solution(my_string) {
    let result = [];
    for (let value of my_string){
        if (Number(value) === 0 || Number(value)){
            result.push(Number(value));
        }
    }
    return result.sort((a,b) => a-b);
}
// solution 2
function solution(my_string) {
    const result = [];
    for (let value of my_string){
        let num = Number(value);
        if (!isNaN(num)){
            result.push(num);
        }
    }
    return result.sort((a,b) => a-b);
}