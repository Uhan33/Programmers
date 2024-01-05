function solution(n) {
    let count = 1;
    while(1) {
        if(n % count === 1){
            break;
        }
        count++;
    }
    
    return count;
}