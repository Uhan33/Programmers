function solution(food) {
    let answer = '';
    for(let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i]/2); j++) {
            answer += i;
        }
    }
    let reverse = Array.from(answer).reverse();
    answer += "0";
    reverse.forEach(e => {answer += e});
    
    return answer;
}