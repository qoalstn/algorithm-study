/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function insertionSortList(head) {
  let res = new ListNode();
  let curr = head;

  while (curr != null) {
    let prev = res;
    let next = curr.next;
    while (prev.next != null && prev.next.val < curr.val) {
      prev = prev.next;
    }
    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }

  return res.next;
}
