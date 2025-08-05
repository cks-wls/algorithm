function solution(id_pw, db) {
    let idCount = 0;
    let pwCount = 0;
    for (let value of db){
        let [id, pw] = value;
        if (id_pw[0] !== id){
            idCount ++;
        }else{
            if (id_pw[1] === pw){
                return 'login';
            }else{
                return 'wrong pw';
            }
        }
    }
    if(idCount === db.length){
        return 'fail';
    }
}