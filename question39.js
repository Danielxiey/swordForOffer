/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  if(!pRoot) {
    return true;
  }
  let flag = 1;
  const LRDTest = (pRoot) => {
    let left = 0, right = 0;
    if(pRoot.left) {
      left = LRDTest(pRoot.left);
    }
    if(pRoot.right) {
      right = LRDTest(pRoot.right);
    }
    if(Math.abs(left - right) > 1) {
      flag = 0;
    }
    return Math.max(left, right) + 1;
  }

  LRDTest(pRoot);
  if(flag == 1) {
    return true;
  } else {
    return false;
  }
}