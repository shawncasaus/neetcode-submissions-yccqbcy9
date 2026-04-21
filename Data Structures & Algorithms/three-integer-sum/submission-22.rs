impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums_sorted = nums.clone();
        nums_sorted.sort();
        let mut sums: Vec<Vec<i32>> = vec![];

        for i in 0..nums_sorted.len() {
            if i > 0 && nums_sorted[i] == nums_sorted[i-1] {
                continue;
            }
            let mut p1 = i+1;
            let mut p2 = nums_sorted.len() -1;
            while p1 < p2 {
                let sum = nums_sorted[i] + nums_sorted[p1] + nums_sorted[p2];
                if sum < 0 {
                    p1 += 1;
                }
                else if sum > 0 {
                    p2 -= 1;
                } 
                else {
                    sums.push(vec![nums_sorted[i], nums_sorted[p1], nums_sorted[p2]]);
                    p1 += 1;
                    p2 -= 1;
                    while p1 < p2 && nums_sorted[p1] == nums_sorted[p1-1] {
                        p1 += 1;
                    }
                    while p1 < p2 && nums_sorted[p2] == nums_sorted[p2+1] {
                        p2 -= 1;
                    }
                }
            }
        }
        sums
    }
}
