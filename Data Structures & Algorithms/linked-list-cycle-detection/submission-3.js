/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slowP = head
        let fastP = head
        while (fastP) {
            slowP = slowP.next
            fastP = fastP.next
            if (fastP) {
                fastP = fastP.next
            }
            if (slowP === fastP) {
                return true
            }
        }
        return false
    }
}
