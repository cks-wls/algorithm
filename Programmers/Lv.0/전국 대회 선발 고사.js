function solution(rank, attendance) {
    const attendanceRank = [];
    for (let i = 0; i < rank.length; i++){
        if (attendance[i]){
            attendanceRank.push(rank[i]);
        }else{
            attendanceRank.push('');
        }
    }
    attendanceRank.sort((a,b) => a-b);
    const arr = attendanceRank.slice();
    for (let value of attendanceRank){
        if (value === ''){
            arr.shift();
        }
    }
    console.log(arr);
    return 10000 * rank.indexOf(arr[0]) + 100 * rank.indexOf(arr[1]) + rank.indexOf(arr[2]);
}