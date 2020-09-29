function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  }

  if (l2 === null) {
    return l1
  }

  const fakeList = new ListNode(0, null);
  let lastNode = fakeList;
  let cursor1: ListNode | null = l1;
  let cursor2: ListNode | null = l2;
  while (cursor1 && cursor2) {
    if (cursor1.val < cursor2.val) {
      lastNode.next = cursor1;
      cursor1 = cursor1.next;
    } else {
      lastNode.next = cursor2;
      cursor2 = cursor2.next;
    }
    lastNode = lastNode.next;
  }

  if (cursor1) {
    lastNode.next = cursor1;
  }

  if (cursor2) {
    lastNode.next = cursor2;
  }

  return fakeList.next;
};