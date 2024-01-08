function solution(n) {
    let answer = -1;
    
    for(let i = 1; n/i >= i; i++) {
        if(n / i === i) {
            answer = (i+1)*(i+1);
            break;
        }
    }
    return answer;
}