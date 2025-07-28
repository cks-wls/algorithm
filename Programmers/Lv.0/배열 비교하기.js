function solution(arr1, arr2) {
    if (arr1.length > arr2.length){
        return 1;
    }else if (arr2.length > arr1.length){
        return -1;
    }else{
        let arr1Sum = 0;
        let arr2Sum = 0;
        for (let value of arr1){
            arr1Sum += value;
        }
        for(let value of arr2){
            arr2Sum += value;
        }
        if (arr1Sum > arr2Sum){
            return 1;
        }else if (arr2Sum > arr1Sum){
            return -1;
        }else{
            return 0;
        }
    }
}