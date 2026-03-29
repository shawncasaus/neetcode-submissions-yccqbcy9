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
            console.log("list1", list1.val)
            console.log("list2", list2.val)

            // if list1.val > list2.val
            // add list1.val to newList
            if (list1.val < list2.val) {
                tail.next = new ListNode(list1.val)
                list1 = list1.next
            } 
            // if list2.val < list2.val
            // add list2.val to newList
            else {
                tail.next = new ListNode(list2.val)
                list2 = list2.next
            }
            tail = tail.next
        }

        // concat remaining list to end of newList
        if (list1 !== null) {
            tail.next = list1
        } else if (list2 !== null) {
            tail.next = list2
        }
        return dummy.next
    }
}
