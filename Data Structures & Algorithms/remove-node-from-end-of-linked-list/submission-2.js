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
        let curr = head

        while(curr !== null) {
            lengthList++
            curr = curr.next
        }

        const removeAt = lengthList - n
        let i = 0
        curr = head

        if (removeAt === 0) return head.next

        while(curr !== null) {
            if (i === removeAt - 1) {
                curr.next = curr.next.next
                break;
            } else {
                curr = curr.next
                i++
            }
        }
        
        return head
    }
}
