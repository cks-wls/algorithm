function solution(order) {
    let result = 0;
    const americano = 
          ["iceamericano", "americanoice", "hotamericano", "americanohot",
          "americano", "anything"];
    const caffelatte = 
          ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot",
          "cafelatte"];
    for (let value of order){
        if (americano.includes(value)){
            result += 4500;
        }else if (caffelatte.includes(value)){
            result += 5000;
        }
    }
    return result;
}