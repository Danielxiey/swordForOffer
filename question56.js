/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
  if(!pHead) {
    return null;
  }

  let head = new ListNode('#');
  head.next = pHead;

  let pre = head;
  let cur = pre.next;
  while(cur) {
    if(cur.next && cur.next.val == cur.val) {
      while(cur.next && cur.next.val == cur.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return head.next;
}