function solution(str_list) {
    let result= [];
    let index = 0;
    let hasI = true;
    const arr = [];
    for (let i = 0; i < str_list.length; i++){
        if (str_list[i] === 'l'){
            return result = str_list.slice(0,i);
        }else if(str_list[i] === 'r'){
            return result = str_list.slice(i+1);
        }else if(str_list[i] !== 'l' && str_list[i] !== 'r'){
            arr.push(str_list);
        }
    }
    if (arr.length === str_list.length){
        return [];
    }
}
