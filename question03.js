/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  if(!head) {
    return 0;
  }
  let current = head;
  let arrayList = [];
  while(current) {
    arrayList.unshift(current.val);
    current = current.next;
  } 
  return arrayList;
}