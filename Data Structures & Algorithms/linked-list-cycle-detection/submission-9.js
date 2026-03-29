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
        let fast = head
        let slow = head

        while (fast !== null) {
            if (fast.next === null || fast.next.next === null) return false
            if(fast === slow) {
                return true
            }
            fast = fast.next.next
            slow = slow.next
        }
        return true
    }
}
