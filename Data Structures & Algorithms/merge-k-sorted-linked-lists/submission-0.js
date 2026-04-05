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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists === null || lists.length === 0) return null

        function mergeLists(list1, list2) {
            const merged = new ListNode(0,null)
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

        while (lists.length > 1) {
            const mergedLists = []

            for (let i = 0; i < lists.length; i+=2) {
                let l1 = lists[i]
                let l2 = (i < lists.length - 1) ? lists[i+1] : null
                mergedLists.push(mergeLists(l1,l2))
            }
            lists = mergedLists
        }
        return lists[0]
    }
}
