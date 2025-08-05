function solution(emergency) {
    const arr = emergency.slice();
    const result = [];
    const object = {};
    arr.sort((a,b)=> b-a);
    for (let i = 0 ; i < arr.length; i++){
        object[arr[i]] = i + 1;
    }
    const key = Object.keys(object);
    const val = Object.values(object);
    for (let i = 0; i < emergency.length; i++){
        let numToStr = emergency[i] + '';
        let index = key.indexOf(numToStr);
        result.push(val[index]);
    }
    return result;
}