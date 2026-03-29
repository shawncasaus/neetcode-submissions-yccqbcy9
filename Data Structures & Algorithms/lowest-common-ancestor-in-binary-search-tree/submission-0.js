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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root
        while (curr) {
            if (q.val > curr.val && p.val > curr.val) {
                curr = curr.right
            } else if (q.val < curr.val && p.val < curr.val) {
                curr = curr.left
            } else {
                return curr
            }
        }
    }
}
