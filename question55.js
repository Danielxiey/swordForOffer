function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead) {
  if(!pHead) {
    return null;
  }
  let p1 = pHead, p2 = pHead;
  do {
    if(p1.next && p2.next && p2.next.next) {
      p1 = p1.next;
      p2 = p2.next.next;
    } else {
      return null;
    }
  } while(p1 != p2 && p1 != null && p2 != null)

  if(p1 == null || p2 == null) {
    return null;
  }

  let count = 1;
  p1 = p1.next;
  while(p1 != p2) {
    p1 = p1.next;
    count++;
  }

  p1 = p2 = pHead;

  while(count > 0) {
    p1 = p1.next;
    count--;
  }

  while(p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}