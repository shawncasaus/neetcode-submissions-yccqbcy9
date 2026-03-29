class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
                // nums=[-1,0,1,2,-1,-4];
        // console.log("test");
        nums.sort((a,b) => a-b)
        let resultMap = new Map(); //find duplicates
        let result = [];
        // pointer 1
        for(let i=0;i<nums.length-2;i++){
            // target value
            // look for 2 numbers that equal target value
            resultMap.set(0-nums[i],i);
            for(let j=i+1;j<nums.length-1;j++){
                for(let k=j+1;k<nums.length;k++) {
                    if(nums[i]+nums[j]+nums[k]===0) {
                        let output = [nums[i],nums[j],nums[k]];
                        output.sort((a,b) => a-b);
                        let outputString = output.join(',');
                        if(!resultMap.has(outputString)){
                            resultMap.set(outputString);
                            result.push([nums[i],nums[j],nums[k]]);
                        } else {
                            resultMap.set(outputString);
                        }
                    }
                }         
            }
        }
        return result;
    }
}
