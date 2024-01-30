function solution(a, b) {
    let answer = '';
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(`2016-${a}-${b}`).getDay();
    answer = day[date];
    
    return answer;
}