function solution(s, n) {
    const low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upper = low.map((value) =>{
        return value.toUpperCase();
    })
    let result = '';
    for (let i = 0; i < s.length; i++){
        let indexNum = 0;
        let realIndex = 0;
        if (s[i] === ' '){
            result += s[i];
        }else{
            if (low.includes(s[i])){
                indexNum = low.indexOf(s[i]) + n;
                realIndex = minusIndex(indexNum);
                result += low[realIndex];
            }else if (upper.includes(s[i])){
                indexNum = upper.indexOf(s[i]) + n;
                realIndex = minusIndex(indexNum);
                result += upper[realIndex];
            }
        }
    }
    return result;
}

function minusIndex(index) {
    while (index >= 26){
        index -= 26;
    }
    return index;
}