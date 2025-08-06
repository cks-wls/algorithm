function solution(array) {
    const object = {};
    for (let value of array){
        if (!Object.keys(object).includes(value.toString())){
            object[value] = 1;
        }else{
            object[value] += 1;
        }
    }
    const key = Object.keys(object);
    const val = Object.values(object);
    let max = 0;
    const index = [];
    for (let value of val){
        if (value >= max){
            max = value;
        }
    }
    for (let i = 0; i < val.length; i++){
        if (val[i] === max){
            index.push(i)
        }
    }
    if (index.length === 1){
        return Number(key[index[0]]);
    }else{
        return -1;
    }
    
}