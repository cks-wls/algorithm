function solution(sides) {
    let longSide = sides[0] ;
    let order;
    for (let i = 0; i < sides.length; i++){
        if (sides[i] > longSide){
            longSide = sides[i];
            order = i;
        }
    }
    let sum = 0;
    for (let i = 0; i < sides.length; i++){
        if (i != order){
            sum += sides[i];
        }
    }
    if (longSide < sum){
        return 1;
    }else{
        return 2;
    }
    
    
}