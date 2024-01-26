function solution(k, score) {
    let answer = [];
    let arr = [];
    
    score.forEach(e => {
        if(arr.length === k) {
            if(arr[0] < e) {
                arr[0] = e;
                arr.sort((a,b) => a-b);
            }
            answer.push(arr[0]);
        } else {
            arr.push(e)
            arr.sort((a,b) => a-b);
            answer.push(arr[0]);
        }
    })
    
    return answer;
}