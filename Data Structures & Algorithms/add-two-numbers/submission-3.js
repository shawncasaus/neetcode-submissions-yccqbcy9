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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = null;
        let tail = null;
        let carry = 0;
        let p1 = l1, p2 = l2;

        while (p1 !== null || p2 !== null || carry !== 0) {
            const v1 = p1 ? p1.val : 0;
            const v2 = p2 ? p2.val : 0;
            const sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);

            const newNode = new ListNode(sum % 10);

            if (!head) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = tail.next;
            }

            if (p1) p1 = p1.next;
            if (p2) p2 = p2.next;
        }

        return head;
    }
}
