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
     * @return {void}
     */
    reorderList(head) {
        if (head === null || head.next === null) return head

        // 1. Find middle
        let slow = head
        let fast = head

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        // 2. Reverse second half
        let second = slow.next
        slow.next = null

        let prev = null
        let curr = second

        while (curr !== null) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        second = prev

        // 3. Merge two halves
        let first = head

        while (second !== null) {
            const temp1 = first.next
            const temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }
    }
}
