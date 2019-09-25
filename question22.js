/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  if(!root) {
    return [];
  }
  let queue = [];
  let result = [];
  queue.push(root);
  while(queue.length > 0) {
    let node = queue.shift();
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
    result.push(node.val);
  }
  return result;
}