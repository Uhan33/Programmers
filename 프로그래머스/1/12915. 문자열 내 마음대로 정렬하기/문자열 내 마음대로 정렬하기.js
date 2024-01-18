function solution(strings, n) {
    let answer = [];
    let arr = strings.sort();
    let min;
    let minIndex;
    while(arr.length !== 0) {
        min = arr[0];
        minIndex = 0;
        for(let j = 0; j < arr.length; j++) {
            if(min[n] > arr[j][n]) {
                min = arr[j];
                minIndex = j;
            }
        }
        answer.push(min);
        arr.splice(minIndex, 1);
    }
    
    return answer;
}