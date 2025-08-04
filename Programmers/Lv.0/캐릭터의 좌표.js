function solution(keyinput, board) {
    const position = [0,0];
    for (let value of keyinput){
        switch(value){
            case 'up':
                position[1] += 1;
                break;
            case 'down':
                position[1] -= 1;
                break;
            case 'right':
                position[0] += 1;
                break;
            case 'left':
                position[0] -= 1;
                break;
        }
        for (let i = 0; i <= 1; i++){
            if (position[0] > 0 && position[0] > (board[0]-1)/2){
                position[0] = (board[0]-1)/2;
            }else if (position[0] < 0 && position[0] < -(board[0]-1)/2){
                position[0] = - (board[0]-1)/2;
            }else if (position[1] > 0 && position[1] > (board[1]-1)/2){
                position[1] = (board[1]-1)/2;
            }else if (position[1] < 0 && position[1] < -(board[1]-1)/2){
                position[1] = - (board[1]-1)/2;
            }
        }
    }
    return position;
}