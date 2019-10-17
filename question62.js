/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
  if(!pRoot || !k || k == 0) {
    return null;
  }

  const LDR = (pRoot) => {
    if(pRoot.left) {
      LDR(pRoot.left);
    }
    if(count > 0) {
      target = pRoot;
      count--;
    } else {
      return;
    }
    if(pRoot.right) {
      LDR(pRoot.right);
    }
  }

  let count = k;
  let target = null;
  LDR(pRoot);
  if(count > 0) {
    return null;
  } else {
    return target;
  }
}