/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot) {
  if(!pRoot) {
    return [];
  }

  let stack = [pRoot];
  let str = [];
  while(stack.length > 0) {
    let node = stack.shift();
    if(node == '#') {
      str.push(node);
      continue;
    }
    if(node.left) {
      stack.push(node.left);
    } else {
      stack.push('#');
    }
    if(node.right) {
      stack.push(node.right);
    } else {
      stack.push('#');
    }
    str.push(node.val);
  }

  let i;
  for(i = str.length - 1; i >= 0; i--) {
    if(str[i] != '#') {
      break;
    }
  }
  str = str.slice(0, i + 1)
  str.push('!');
  return str;
}
function Deserialize(s) {
  if(!s || s.length == 0) {
    return null;
  } 
  let pRoot = new TreeNode(s[0]);
  let current = pRoot;
  let flagL = true;
  let stack = [];
  for(let i = 1; s[i] != '!'; i++) {
    if(s[i] == '#') {
      if(flagL == false) {
        current = stack.shift();
      }
      flagL = !flagL;
      continue;
    }
    let node = new TreeNode(s[i]);
    stack.push(node);
    if(flagL) {
      current.left = node;
    } else {
      current.right = node;
      current = stack.shift();
    }
    flagL = !flagL;
  }
  return pRoot;
}