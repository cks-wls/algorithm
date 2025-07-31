function solution(food) {
    const newFood = [];
    let result = '';
    let reverseResult = '';
    newFood.push(food[0]);
    for (let i = 1; i < food.length; i++){
        if (food[i] % 2 !== 0){
            newFood.push(food[i]-1);
        }else{
            newFood.push(food[i]);
        }
    }
    
    for (let i = 1; i < newFood.length; i++){
        for (let j = 1; j <= newFood[i]/2; j++){
            result += i;
        }
    }
    for (let i = result.length -1; i >= 0; i--){
        reverseResult += result[i];
    }
    return (result + '0' + reverseResult);
}