/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
  if(!pRoot) {
    return 0;
  }

  let count = 1;
  let depth = 1;
  const countDepth = (pRoot, count) => {
    let leftCount = count, rightCount = count;
    if(pRoot.left) {
      leftCount++;
      countDepth(pRoot.left, leftCount);
    } 
    if(pRoot.right) {
      rightCount++;
      countDepth(pRoot.right, rightCount);
    }
    depth = Math.max(depth, leftCount, rightCount);
  }

  countDepth(pRoot, count);
  return depth;
}