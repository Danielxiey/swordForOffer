/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  if(!pNode) {
    return null;
  }

  if(pNode.right) {
    pNode = pNode.right;
    while(pNode.left) {
      pNode = pNode.left;
    }
    return pNode;
  } else if(pNode.next && pNode.next.left == pNode) {
    return pNode.next;
  } else if(pNode.next && pNode.next.right == pNode) {
    pNode = pNode.next;
    while(pNode.next && pNode.next.left != pNode) {
      pNode = pNode.next;
    }
    return pNode.next;
  } else {
    pNode.next;
  }
}