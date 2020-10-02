/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const newList = new ListNode(0);
  let newHead = newList;

  let len = lists.length;
  while (true) {
    let index = -1;
    let min = undefined;

    for (let i = 0; i < len; i++) {
      const list = lists[i];
      if (list) {
        if (!min) {
          min = list.val;
        } else {
          if (list.val < min) {
            min = list.val;
            index = i;
          }
        }
      }
    }

    if (index === -1) {
      break;
    }

    const list = lists[index];
    if (list) {
      lists[index] = list.next;
      newHead.next = list;
      newHead = newHead.next;
    } else {
      break;
    }
  }

  return newList.next;
};