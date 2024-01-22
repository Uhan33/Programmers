function solution(numbers) {
    let answer = [];
    
    if(numbers.length === 2)
        answer.push(numbers[0] + numbers[1]);
    else {
        for(let i = 0; i < numbers.length-1; i++) {
            for(let j = i+1; j < numbers.length; j++) {
                if(!answer.find(e => e === numbers[i] + numbers[j]))
                    answer.push(numbers[i] + numbers[j]);
            }   
        }
    
        for(let i = 0; i < answer.length-1; i++) {
            for(let j = i+1; j < answer.length; j++) {
                if(answer[i] > answer[j]) {
                    let temp = answer[j];
                    answer[j] = answer[i];
                    answer[i] = temp;
                }
            }
        }
    }
    
    return answer;
}