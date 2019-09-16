/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if(pre.length > 0 && vin.length > 0) {
    let root = new TreeNode(pre.shift());
    let rootIndex = vin.indexOf(root.val);
    let leftTree = vin.slice(0, rootIndex);
    let rightTree = vin.slice(rootIndex + 1);
    root.left = reConstructBinaryTree(pre, leftTree);
    root.right = reConstructBinaryTree(pre, rightTree);
    return root;
  } else {
    return null;
  }
}