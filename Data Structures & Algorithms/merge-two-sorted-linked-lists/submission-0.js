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
        let dummy = new ListNode(0, null)
        let newList = dummy

        while (list1 && list2) {
            if (list1.val < list2.val) {
                newList.next = list1
                list1 = list1.next
            } else {
                newList.next = list2
                list2 = list2.next
            }
            newList = newList.next
        }
        if (list1) {
            newList.next = list1
        }
        if (list2) {
            newList.next = list2
        }
        return dummy.next
    }
}
