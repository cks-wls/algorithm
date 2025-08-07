// solution 1
function solution(hp) {
    let generalAnt = 0;
    let soldierAnt = 0;
    let workerAnt = 0;
    while(true){
        if (hp <= 0){
            break;
        }else{
         if (Math.floor(hp / 5) > 0){
            generalAnt = Math.floor(hp / 5)
            hp -= generalAnt * 5;
        }else if (Math.floor(hp / 3) > 0){
            soldierAnt = Math.floor(hp / 3)
            hp -= soldierAnt * 3;
        }else{
            workerAnt = hp;
            hp -= workerAnt;
        }       
        }
        }
    return (generalAnt + soldierAnt + workerAnt);
}
// solution 2
function solution(hp) {
    let general = 0;
    let soldier = 0;
    let worker = 0;
    while (hp > 0){
        if (hp >= 5){
            general ++;
            hp -= 5;
        }else if(hp >= 3){
            soldier ++;
            hp -= 3;
        }else{
            worker ++;
            hp -= 1;
        }
    }
    return general + soldier + worker;
}