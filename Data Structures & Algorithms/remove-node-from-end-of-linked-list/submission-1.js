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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let lengthList = 0
        let dummy = head

        while(dummy !== null) {
            dummy = dummy.next
            lengthList++
        }
        let removeIndex = lengthList - n
        let i = 0

        if (removeIndex === 0) return head.next
        dummy = head

        while(dummy !== null) {
            if (i === removeIndex - 1) {
                dummy.next = dummy.next.next
                break;
            } else {
                dummy = dummy.next
                i++
            }
        }
        return head
    }
}
