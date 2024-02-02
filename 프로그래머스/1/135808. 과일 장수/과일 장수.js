function solution(k, m, score) {
    let answer = 0;
    let count = 0;
    
    let sortArr = score.sort();
    for(let i = score.length-1; i >= 0; i--) {
        count++;
        if(count >= m) {
            answer += score[i]*m;
            count = 0;
        }
            
    }
    
    return answer;
}