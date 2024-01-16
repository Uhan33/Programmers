function solution(sizes) {
    let answer = 0;
    let rowMax = 0
    let columnMax = 0;
    let array = sizes;
    for(let i = 0; i < array.length; i++) {
        if(array[i][0] < array[i][1]) {
            let temp = array[i][0];
            array[i][0] = array[i][1];
            array[i][1] = temp;
        }
        rowMax < array[i][0] ? rowMax = array[i][0] : 0;
        columnMax < array[i][1] ? columnMax = array[i][1] : 0;
    }
    answer = rowMax * columnMax;
    
    return answer;
}