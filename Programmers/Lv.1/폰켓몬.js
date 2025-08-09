function solution(nums) {
    const max = nums.length;
    const object = {};
    for (let value of nums){
        if (!Object.keys(object).includes(String(value))){
            object[value] = 1;
        }else{
            object[value] += 1;
        }
    }
    const key = Object.keys(object);
    if (key.length < max/2){
        return key.length;
    }else{
        return max / 2;
    }
}