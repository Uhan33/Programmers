function solution(arr) {
    let answer = [];
    if(arr.length === 1) 
        arr[0] = -1;
    else {
        let min = arr[0];
        let index = 0;
        for(let i = 1; i < arr.length; i++) {
            if(min > arr[i]) { 
                min = arr[i];
                index = i;
            }
        }
        arr.splice(index, 1);
    }
    return arr;
}