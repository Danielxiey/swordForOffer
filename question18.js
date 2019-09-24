/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  const swapChildren = (node) => {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    return node;
  }
  if(!root) {
    return null;
  }
  if(root.left || root.right) {
    root = swapChildren(root);
    if(root.left) {
      root.left = Mirror(root.left);
    }
    if(root.right) {
      root.right = Mirror(root.right);
    }
  }
  return root;
}