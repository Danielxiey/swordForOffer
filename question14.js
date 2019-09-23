/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  if(!head || k <= 0) {
    return null;
  }
  let i = head;
  let j = head;
  while(k - 1 > 0 && j.next) {
    j = j.next;
    k--;
  }
  if(k - 1 != 0) {
    return null;
  }
  while(j.next) {
    i = i.next;
    j = j.next;
  }
  return i;
}