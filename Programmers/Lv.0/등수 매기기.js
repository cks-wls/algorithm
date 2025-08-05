function solution(score) {
    const avg = [];
    const rank = [];
    const result = [];
    let sameCount = 0;
    for (let value of score){
        avg.push((value[0] + value[1]) / 2);
    }
    const avgSort = avg.slice();
    avgSort.sort((a,b) => b-a);
    let count = 1;
    for (let i = 0; i < avgSort.length; i++){
        rank.push(count);
        if (avgSort[i] !== avgSort[i+1]){
            count += 1 + sameCount;
            sameCount = 0;
        }else{
            sameCount ++;
        }
    }
    for (let i = 0; i < avg.length; i++){
        let index = avgSort.indexOf(avg[i]);
        result.push(rank[index]);
    }
    return result;
}