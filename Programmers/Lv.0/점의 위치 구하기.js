function solution(dot) {
    // 1사분면 ++
    // 2사분면 -+
    //3사분면 --
    // 4사분면 +-
    // dot은 배열형태
    if (dot[0] > 0){
        if(dot[1] > 0){
            return 1;
        }else{
            return 4;
        }
    }else{
        if(dot[1] > 0){
            return 2;
        }else{
            return 3;
        }
    }
}