let stack = [];
function Insert(num) {
  stack.push(num);
  if(stack.length == 1) {
    return;
  } else {
    for(let i = stack.length - 1; i > 0; i--) {
      if(stack[i] >= stack[i - 1]) {
        break;
      } else {
        let temp = stack[i];
        stack[i] = stack[i - 1];
        stack[i - 1] = temp;
      }
    }
  }
}
function GetMedian() {
  let index = Math.floor(stack.length / 2);
  if(stack.length % 2 != 0) {
    return stack[index];
  } else {
    return (stack[index] + stack[index - 1]) / 2;
  }
}