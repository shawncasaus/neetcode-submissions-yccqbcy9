use std::collections::HashSet;

impl Solution {
    pub fn dfs( i: usize, 
                j: usize, 
                rows: usize, 
                cols: usize, 
                grid: &Vec<Vec<char>>,
                visited: &mut HashSet<(usize, usize)>
        ) {
        if i >= rows || j >= cols {
            return;
        }
        if grid[i][j] == '0' || visited.contains(&(i,j)) {
            return;
        }

        visited.insert((i,j));

        Self::dfs(i-1,j, rows, cols, grid, visited);
        Self::dfs(i+1,j, rows, cols, grid, visited);
        Self::dfs(i,j-1, rows, cols, grid, visited);
        Self::dfs(i,j+1, rows, cols, grid, visited);
    }

    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut islands = 0;
        let mut visited: HashSet<(usize, usize)> = HashSet::new();

        for i in 0..rows {
            for j in 0..cols {
                if grid[i][j] == '1' && !visited.contains(&(i,j)) {
                    islands += 1;
                    Self::dfs(i,j, rows, cols, &grid, &mut visited);
                }
            }
        }
        islands
    }
}
