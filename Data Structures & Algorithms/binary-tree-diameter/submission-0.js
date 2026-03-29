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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let result = 0

        const getHeight = (curr) => {
            if (!curr) {
                return 0
            }
            let left = getHeight(curr.left)
            let right = getHeight(curr.right)
            result = Math.max(result, left + right)
            return 1 + Math.max(left, right)
        }
        getHeight(root)
        return result
    }
}
