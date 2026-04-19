use std::collections::HashMap;

impl Solution {
    pub fn valid_word_square(words: Vec<String>) -> bool {
        let rows = words.len();
        let mut col_map: HashMap<usize, String> = HashMap::new();

        for i in 0..rows {
            let curr_word_len = words[i].len();
            for j in 0..curr_word_len {
                if let Some(char) = words[i].chars().nth(j) {
                    if let Some(value) = col_map.get_mut(&j) {
                        value.push(char);
                    } else {
                        col_map.insert(j, char.to_string());
                    }
                }
            }
        }
        for i in 0..rows {
            let curr_word = &words[i];
            if let Some(value) = col_map.get_mut(&i) {
                if curr_word != value {
                    return false;
                }
            }
        }
        true
    }
}

/**
[ "ball",
  "area",
  "read",
  "lady"]
*/
