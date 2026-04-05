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
     * @return {ListNode}
     */
    reverseList(head) {
        // prev is the head of the reversed list we are building
        let prev = null

        // curr is used to traverse the original list
        let curr = head

        while (curr !== null) {
            // save the next node so we don't lose the rest of the list
            let temp = curr.next

            // reverse the current node's pointer
            curr.next = prev

            // move prev forward (grow reversed list)
            prev = curr

            // move curr forward (continue traversal)
            curr = temp
        }

        // prev is now the head of the reversed list
        return prev
    }
}
