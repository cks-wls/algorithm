function solution(dots) {
    let width = 0;
    let height = 0;
    let maxX = dots[0][0];
    let maxY = dots[0][1];
    let minX = dots[0][0];
    let minY = dots[0][1];
    for (let value of dots){
        if (value[0] >= maxX){
            maxX = value[0];
        }
        if(value[0] <= minX){
            minX = value[0];
        }
        if (value[1] >= maxY){
            maxY = value[1];
        }
        if(value[1] <= minY){
            minY = value[1]
        }
    }
    width = maxX - minX;
    height = maxY - minY;
    return width * height;
    
}