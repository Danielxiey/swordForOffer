/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
  if(!pRootOfTree) {
    return null;
  }
  let pLastNode = null;
  const transfer = (pRootOfTree, pLastNode) => {
    if(pRootOfTree.left) {
      pLastNode = transfer(pRootOfTree.left,pLastNode);
    }
    pRootOfTree.left = pLastNode;
    if(pLastNode) {
      pLastNode.right = pRootOfTree;
    }
    pLastNode = pRootOfTree;
    if(pRootOfTree.right) {
      pLastNode = transfer(pRootOfTree.right, pLastNode);
    }
    return pLastNode;
  }

  let pHead = pRootOfTree;
  while(pHead.left) {
    pHead = pHead.left;
  }
  transfer(pRootOfTree, pLastNode);
  return pHead;
}