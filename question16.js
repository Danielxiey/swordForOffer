/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  if(!pHead1 && !pHead2) {
    return null;
  } else if(!pHead1 && pHead2) {
    return pHead2;
  } else if(pHead1 && !pHead2) {
    return pHead1;
  }

  let p1 = pHead1;
  let p2 = pHead2;
  let head;
  if(p1.val < p2.val) {
    head = p1;
    p1 = p1.next;
  } else {
    head = p2;
    p2 = p2.next;
  }
  let current = head;
  while(p1 && p2) {
    if(p1.val < p2.val) {
      current.next = p1;
      current = current.next;
      p1 = p1.next;
    } else {
      current.next = p2;
      current = current.next;
      p2 = p2.next;
    }
  }
  if(!p1) {
    current.next = p2;
  } else {
    current.next = p1;
  }
  return head;
}
