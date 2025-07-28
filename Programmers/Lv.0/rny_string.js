function solution(rny_string) {
    let result = '';
    if(!rny_string.includes('m')){
        return rny_string;
    }else{
        for (let value of rny_string){
            if (value === 'm'){
                result += 'rn';
            }else{
                result += value;
            }
        }
    }
    return result;
}