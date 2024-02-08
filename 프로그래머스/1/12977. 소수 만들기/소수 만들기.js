function solution(nums) {
    let answer = 0;
    let arr = [];
    let number = 0;
    
    let i = 0, j = 1, k = 2;
    
    while(1) {
        number = nums[i] + nums[j] + nums[k];
        arr.push(number);
        k++;
        if(k === nums.length) {
            j++;
            k = j+1;
            if(j === nums.length-1) {
                i++;
                j = i+1;
                k = j+1;
                if(i === nums.length-2) {
                    break;
                }
            }
        }
    }
    
    // let set = new Set(arr);
    // arr = [];
    // set.forEach(e => {
    //     arr.push(e);
    // })
    
    arr.forEach(e => {
        let count = 0;
        for(let i = 2; i < Math.ceil(e/2); i++) {
            if(e % i === 0)
                count++;
        }
        if(count === 0)
            answer++;
    });
    
    return answer;
}