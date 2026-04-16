use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut numbers = HashMap::new();

        for (i, &val) in nums.iter().enumerate() {
            let seeking = target - val;
            if let Some(&index) = numbers.get(&seeking) {
                return vec![index as i32, i as i32];
            }
            numbers.insert(val,i);
        }
        vec![-1,-1]
    }
}
