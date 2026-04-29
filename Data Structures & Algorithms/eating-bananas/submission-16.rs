impl Solution {
    pub fn is_valid_k(k: i32, piles: &Vec<i32>, h: i32) -> bool {
        let mut hours = 0;
        for i in 0..piles.len() {
            hours += (piles[i] + k - 1) / k;
            if hours > h {
                return false;
            }
        }
        true
    }

    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let max = *piles.iter().max().unwrap();
        let mut p1 = 1;
        let mut p2 = max;

        while p1 <= p2 {
            let mid = (p1 + p2 + 1) / 2;
            if Self::is_valid_k(mid, &piles, h) {
                p2 = mid - 1
            } else {
                p1 = mid + 1
            }
        }
        p1
    }
}