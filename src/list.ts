export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(nums: number[]) {
  let firstNode = null;
  let lastNode = null;
  for (const num of nums) {
    let node = new ListNode(num);
    if (!firstNode) {
      firstNode = node;
    }

    if (lastNode) {
      lastNode.next = node;
    }
    lastNode = node;
  }

  return firstNode;
}

export function printList(list: ListNode | null) {
  let cursor = list;
  console.log('[');
  while (cursor) {
    console.log(cursor.val, ' ');
    // @ts-ignore
    cursor = cursor.next;
  }
  console.log(']');
}
