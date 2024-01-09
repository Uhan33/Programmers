function solution(num) {
    let answer = 0;
    while(1) {
        if(num === 1)
            break;
        else {
            if(answer === 500) {
                answer = -1;
                break;
            }
        } 
        num%2 === 0 ? num /= 2 : num = num*3 + 1;
        answer++;
    }
    return answer;
}