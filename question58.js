/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  if(!pRoot) {
    return true;
  }

  const symmetrical = (node1, node2) => {
    if(!node1 && !node2) {
      return true;
    } else if(!node1 || !node2) {
      return false;
    }
    if(node1.val != node2.val) {
      return false;
    } else {
      return symmetrical(node1.left, node2.right) && symmetrical(node1.right, node2.left);
    }
  }

  return symmetrical(pRoot.left, pRoot.right);
}