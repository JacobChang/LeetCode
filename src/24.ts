function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) {
      return null;
    }
  
    if (head.next === null) {
      return head;
    }
  
    let first = head;
    let snd = first.next;
    let newHead = new ListNode();
    let lastNode = newHead;
    while (first && snd) {
      const tail = snd.next;
      snd.next = first;
      first.next = tail;
  
      lastNode.next = snd;
  
      lastNode = first;
      if (!tail) {
        break;
      }
  
      first = tail;
      snd = first.next;
    }
  
    return newHead.next;
  };