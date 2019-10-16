/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  if (!pRoot) {
    return [];
  }
  
  let row = 1;
  let result = [], temp1 = [], temp2 = [pRoot];

  while (temp2.length > 0) {
    temp1 = temp2.concat();
    temp2 = [];
    let tempResult = [];
    for (let i = 0; i < temp1.length; i++) {
      if (temp1[i].left) {
        temp2.push(temp1[i].left);
      }
      if (temp1[i].right) {
        temp2.push(temp1[i].right);
      }
      if(row % 2 != 0) {
        tempResult.push(temp1[i].val);
      } else {
        tempResult.unshift(temp1[i].val);
      }
    }
    result.push(tempResult);
    row++;
  }

  return result;
}