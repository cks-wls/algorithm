function solution(sides) {
    let count = 0;
    sides.sort((a,b) => a-b);
    let max = sides[1];
    let min = sides[0];
    let long = max;
    while(true){
        if (long < sides[0] + sides[1]){
            count ++;
            long ++;
        }else{
            break;
        }
    }
    for (let i = max-min; i < max; i++){
        if (max < min + i){
            count ++;
        }
    }
    return count;
}