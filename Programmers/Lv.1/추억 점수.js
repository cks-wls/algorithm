function solution(name, yearning, photo) {
    const object = {};
    const result = [];
    for (let i = 0; i < name.length; i++){
        object[name[i]] = yearning[i];
    }
    const key = Object.keys(object);
    for(let value of photo){
        let score = 0;
        for (let val of value){
            if (key.includes(val)){
                score += object[val];
            }
        }
        result.push(score);
    }
    return result;
}