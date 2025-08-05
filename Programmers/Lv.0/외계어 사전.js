function solution(spell, dic) {
    for (let value of dic){
        let count = 0;
        let obj = {};
        for (let i = 0; i < spell.length; i++){
            if (value.includes(spell[i])){
                if (!Object.keys(obj).includes(spell[i])){
                    obj[spell[i]] = 1;
                    count ++;
                }
            }
        }
        if (count === spell.length){
            return 1;
        }
    }
    return 2;
}