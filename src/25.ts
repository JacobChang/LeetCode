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
import { ListNode, printList, toList } from "./list";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null || k === 1) {
    return head;
  }

  let groupHead: ListNode | null = null;
  let groupTail: ListNode | null = null;
  let start: ListNode | null = null;
  let i = 0;
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;
  while (curr !== null) {
    let next: ListNode | null = curr.next;
    if (!start) {
      start = curr;
      start.next = null;
    } else {
      curr.next = prev;
    }

    if (i % k === k - 1) {
      if (!groupHead) {
        groupHead = curr;
        groupTail = start;
      } else if (groupTail) {
        groupTail.next = curr;
        groupTail = start;
      }
      start = null;
      prev = null;
    } else {
      prev = curr;
    }

    if (!next) {
      if (i % k !== k - 1) {
        let last = null;
        let cursor: ListNode | null = curr;
        while (cursor) {
          let temp: ListNode | null = cursor.next;
          cursor.next = last;
          last = cursor;
          cursor = temp;
        }
        if (groupTail) {
          groupTail.next = last;
        } else {
          groupHead = last;
        }
      }
      break;
    }
    i = i + 1;
    curr = next;
  }

  return groupHead;
}

let list = reverseKGroup(toList([1, 2, 3, 4, 5]), 2);
for (let i = 0; i <= 10; i++) {
  console.log(list?.val);
  // @ts-ignore
  list = list?.next;
}
