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
        if (head === null || head.next === null) return

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
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        // 3. Merge two halves
        let first = head
        let secondHalf = prev

        while (secondHalf !== null) {
            let temp1 = first.next
            let temp2 = secondHalf.next

            first.next = secondHalf
            secondHalf.next = temp1

            first = temp1
            secondHalf = temp2
        }
    }
}
