/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    dfs(root) {
        if (!root) {
            return [true, 0]
        }
        let l = this.dfs(root.left)
        let r = this.dfs(root.right)
        let balanced = (l[0] && r[0] && Math.abs(l[1] - r[1]) <= 1)
        return [balanced, 1 + Math.max(l[1], r[1])]
    }
    isBalanced(root) {
        return this.dfs(root)[0]
    }
}
