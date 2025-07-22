// 장군개미 : 5, 병정개미 : 3, 일개미 : 1  
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