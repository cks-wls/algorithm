function solution(strArr) {
    const object = {};
    for (let value of strArr){
        let len = value.length;
        let strLen = len + '';
        if (!Object.keys(object).includes(strLen)){
         object[len] = 1;      
        }else{
        object[len] += 1;      
        }
    }
   const result = Object.values(object);
    result.sort((a,b) => b-a);
    return result[0];
}