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
        if (head.next === null || head.next.next === null) return false
        let fast = head
        let slow = head

        while (fast !== null) {
            if(fast === slow) {
                return true
            }
            fast = fast.next.next
            slow = slow.next
        }
        return true
    }
}
