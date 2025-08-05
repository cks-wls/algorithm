function solution(s) {
    const object = {};
    const result = [];
    for (let value of s){
        if (!Object.keys(object).includes(value)){
            object[value] = 1;
        }else{
            object[value] += 1;
        }
    }
    const count = Object.values(object);
    const str = Object.keys(object);
    for (let i = 0; i < str.length; i++){
        if (count[i] === 1){
            result.push(str[i]);
        }
    }
    result.sort();
    if (result.length === 0){
        return '';
    }else{
        return result.join('');
    }
}