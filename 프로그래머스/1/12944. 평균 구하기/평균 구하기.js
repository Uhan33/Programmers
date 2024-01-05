function solution(arr) {
    var answer = 0;
    arr.forEach(e => {
        answer += e;
    })
    answer /= arr.length;
    return answer;
}