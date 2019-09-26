/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  if(!root || !expectNumber) {
    return [];
  }
  let stack = [];
  let result = [];
  let total = 0;
  const dfs = (root, total) => {
    if(!root) {
      return;
    }
    stack.push(root.val);
    total += root.val;
    if(root.left) {
      dfs(root.left, total);
    }
    if(root.right) {
      dfs(root.right, total);
    }
    if(!root.left && !root.right && total == expectNumber) {
      let tempArr = stack.slice(0);     //要对数组进行复制，如果直接传入stack，最后是空数组
      result.push(tempArr);
    }
    total -= stack.pop();
  }
  dfs(root, total);
  return result;
}