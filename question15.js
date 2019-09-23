/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  if(!pHead) {
    return null;
  }
  if(!pHead.next) {
    return pHead;
  } else {
    let prev = pHead;
    let current = prev.next;
    let next = current.next;
    while(next) {
      current.next = prev;
      prev = current;
      current = next;
      next = current.next;
    }
    current.next = prev;
    pHead.next = null;
    return current;
  }
}
