let stack = [];
let minStack = [];
function push(node) {
  stack.push(node);
  if(minStack.length == 0) {
    minStack.push(node);
  } else {
    let min = minStack[minStack.length - 1];
    if(node < min) {
      minStack.push(node);
    } else {
      minStack.push(min);
    }
  }
}
function pop() {
  let item = stack.pop();
  minStack.pop();
  return item;
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}