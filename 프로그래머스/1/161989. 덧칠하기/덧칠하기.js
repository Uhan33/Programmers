function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    for(let i of section) {
        if(painted < i) {
            answer++;
            painted = i+m-1;
        }
    }
    return answer;
}