/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  let result = false;
  const isSubtree = (pRoot1, pRoot2) => {
    if(!pRoot2) {
      return true;
    }
    if(!pRoot1) {
      return false;
    }
    if(pRoot1.val != pRoot2.val) {
      return false;
    }
    return isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right);
  }

  if(pRoot1 && pRoot2) {
    if(pRoot1.val == pRoot2.val) {
      result = isSubtree(pRoot1, pRoot2);
    }
    if(!result) {
      result = HasSubtree(pRoot1.left, pRoot2);
    }
    if(!result) {
      result = HasSubtree(pRoot1.right, pRoot2);
    }
  }
  return result;
}