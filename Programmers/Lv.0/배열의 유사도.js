function solution(s1, s2) {
    let same = 0;
    for (let value1 of s1){
        for (let value2 of s2 ){
            if (value1 === value2){
                same += 1;
            }
        }
    }
    return same;
}