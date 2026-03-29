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
        let newList = new ListNode()
        let cur = newList
        let carry = 0
        while (l1 && l2) {
            let tempVal = l1.val + l2.val + carry
            if (tempVal <= 9) {
                cur.next = new ListNode(tempVal);
                carry = 0
            } else {
                cur.next = new ListNode(tempVal - 10);
                carry = 1
            }
            l1 = l1.next
            l2 = l2.next
            cur = cur.next;
        }
        if (l1) {
            while (l1) {
                cur.next = new ListNode(l1.val + carry);
                l1 = l1.next
                carry = 0
            }
        }
        if (l2) {
            while (l2) {
                cur.next = new ListNode(l2.val + carry);
                l2 = l2.next
                carry = 0
            }
        }
        if (carry) {
            cur.next = new ListNode(carry);
        }
        return newList.next
    }
}
