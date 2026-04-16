use std::collections::HashMap;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let mut chars_map = HashMap::new();
        for c in s.chars() {
            if let Some(val) = chars_map.get_mut(&c) {
                *val += 1;
            } else {
                chars_map.insert(c, 1);
            }
        }
        for c in t.chars() {
            if let Some(val) = chars_map.get_mut(&c) {
                *val -= 1;
            } else {
                return false;
            }
        }
        for (key, &val) in &chars_map {
            if val != 0 {
                return false;
            }
        }

        true
    }
}
