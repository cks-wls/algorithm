function solution(l, r) {
    const result =[];
    let count = 0;
    for (let i = l; i<= r; i++){
        let str = i + '';
        for (let value of str){
            if (value === '5' || value === '0'){
                count ++;
            }
        }
        if (count === str.length){
           result.push(i); 
        }
        count = 0;
    }
    if (result.length === 0){
        return [-1];
    }else{
        return result;
    }
}