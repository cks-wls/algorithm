function solution(s) {
    const arr = s.split(' ');
    const arr1 = [];
    let str = '';
    for(let value of arr){
        for(let i = 0; i < value.length; i++){
            if (i % 2 === 0){
                str += value[i].toUpperCase();
            }else{
                str += value[i].toLowerCase();
            }
        }
        arr1.push(str);
        str = '';
    }
    return arr1.join(' ');
}