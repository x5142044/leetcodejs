var arrayPairSum = function(nums) {
    var len = nums.length;
    nums = nums.sort(function(a, b){return a-b});
    var sum = 0;
    
    do 
        sum+=nums[len-2];
    while (len-=2)
    
    return sum;
};