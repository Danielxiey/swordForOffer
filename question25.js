/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead) {
  if(!pHead) {
    return null;
  }

  const cloneNode = (pHead) => {
    let currentNode = pHead;
    while(currentNode) {
      let node = Object.assign({}, currentNode);
      node.next = currentNode.next;
      currentNode.next = node;
      currentNode = node.next;
    }
  }

  const connectRandom = (pHead) => {
    let currentNode = pHead;
    let cloneNode = currentNode.next;
    while(currentNode) {
      if(currentNode.random) {
        cloneNode.random = currentNode.random.next;
      }
      currentNode = cloneNode.next;
      if(currentNode) {
        cloneNode = currentNode.next;
      }
    }
  }

  const copyRandomList = (pHead) => {
    let currentNode = pHead;
    let cloneNode = currentNode.next;
    let copyHead = pHead.next;
    while(cloneNode.next != null) {
      currentNode.next = cloneNode.next;
      currentNode = currentNode.next;
      cloneNode.next = currentNode.next;
      cloneNode = cloneNode.next;
    }
    return copyHead;
  }

  cloneNode(pHead);
  connectRandom(pHead);
  return copyRandomList(pHead);
}
