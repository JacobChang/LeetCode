class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newList = new ListNode(0, null);
  let slow = newList;
  let fast = newList;
  slow.next = head;
  for (let i = 0; i < n; i++) {
    // @ts-ignore
    fast = fast.next;
  }
  while (fast.next != null) {
    fast = fast.next;
    // @ts-ignore
    slow = slow.next;
  }
  // @ts-ignore
  slow.next = slow.next.next;
  return newList.next;
};