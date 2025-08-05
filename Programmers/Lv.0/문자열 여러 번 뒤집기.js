function solution(my_string, queries) {
    let arr = my_string.split('');
    let middle =[];
    for (let value of queries){
        for (let i = value[0]; i <= value[1]; i++){
            middle.push(arr[i]);
        }
        middle.reverse();
        
        for (let i = value[0]; i <= value[1]; i++){
            arr[i] = middle[i - value[0] ]
        }
    }
    return arr.join('');
}