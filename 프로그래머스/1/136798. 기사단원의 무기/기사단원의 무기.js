function solution(number, limit, power) {
    let answer = 0;
    let arr = [1];
    let count = 0;
    
    for(let i = 2; i <= number; i++) {
        count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                i/j === j ? count++ : count += 2;
            }
                
            if(count > limit) {
                count = power;
                break;
            }
                
        }
        arr.push(count);
    }
    
    arr.forEach(e => {
        answer += e;
    })
    
    return answer;
}