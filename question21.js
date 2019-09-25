function IsPopOrder(pushV, popV) {
  if(!pushV || !popV) {
    return false;
  }
  let flag = true;
  let stack = [];
  stack.push(pushV.shift());
  while(popV.length > 0) {
    while(pushV.length > 0 && stack[stack.length - 1] != popV[0]) {
      stack.push(pushV.shift());
    }
    while(popV.length > 0 && stack[stack.length - 1] == popV[0]) {
      stack.pop();
      popV.shift();
    }
    if(pushV.length == 0 && popV.length > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}