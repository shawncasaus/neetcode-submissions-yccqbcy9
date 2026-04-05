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
        let merged = new ListNode(0,null)
        let dummy = merged

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                const temp = list1.next
                list1.next = null
                dummy.next = list1
                list1 = temp
            } else {
                const temp = list2.next
                list2.next = null
                dummy.next = list2
                list2 = temp
            }
            dummy = dummy.next
        }

        if (list1 !== null) {
            dummy.next = list1
        }
        if (list2 !== null) {
            dummy.next = list2
        }
        return merged.next
    }
}
