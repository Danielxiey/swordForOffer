/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  if(!pHead1 || !pHead2) {
    return null;
  }
  let length1 = 1, length2 = 1;
  let current1 = pHead1;
  let current2 = pHead2;
  while(current1.next) {
    length1++;
    current1 = current1.next;
  }
  while(current2.next) {
    length2++;
    current2 = current2.next;
  }
  if(current1 != current2) {
    return null;
  }

  current1 = pHead1;
  current2 = pHead2;
  let p = 0;
  if(length1 > length2) {
    while(p < length1 - length2) {
      current1 = current1.next;
      p++;
    }
  } else if(length2 - length1) {
    while(p < length2 - length1) {
      current2 = current2.next;
      p++;
    }
  }

  while(current1 != current2) {
    current1 = current1.next;
    current2 = current2.next;
  }
  return current1;
}