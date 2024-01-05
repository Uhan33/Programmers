function solution(numbers) {
    var answer = 0;
    numbers.forEach(element => {
        answer += element;
    });
    answer /= numbers.length;
    return answer;
}