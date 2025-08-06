function solution(common) {
    let count = 0;
    let tolerance = common[1] - common[0];
    let ratio = common[1]/common[0];
    let len =  common.length - 1;
    if (common[len] - common[len-1] === tolerance){
        return common[len] + tolerance;
    }
    if (common[len] / common[len-1] === ratio){
        return common[len] * ratio;
    }
}