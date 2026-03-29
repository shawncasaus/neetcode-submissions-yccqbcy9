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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0)
        let tail = dummy

        while(list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                tail.next = new ListNode(list1.val)
                list1 = list1.next
            } else {
                tail.next = new ListNode(list2.val)
                list2 = list2.next
            }
            tail = tail.next
        }

        if(list1 !== null) {
            tail.next = list1
        } else if(list2 !== null) {
            tail.next = list2
        }

        return dummy.next
    }
}
