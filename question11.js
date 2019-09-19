function NumberOf1(n) {
  let count = 0;
  let stack = [];
  if(n == 0) {          //为0的情况
    return count;
  } else if(n > 0) {    //为正数的情况
    while(n > 0) {
      if(n % 2 == 1) {
        count++;
      }
      n = Math.floor(n / 2);
    }
  } else if(n < 0) {    //为负数的情况
    //生成反码
    n = -n;
    while(n > 0) {
      switch(n % 2) {
        case 0:
          stack.push(1);
          break;
        case 1:
          stack.push(0);
          break;
      }
      n = Math.floor(n / 2);
    }

    //补全反码位数
    let i = 1;
    while(Math.pow(32, i) < stack.length) {
      i++;
    }
    i = Math.pow(32, i);
    let length = stack.length;
    while(i - length > 0) {
      stack.push(1);
      i--;
    }

    //找寻最低位为0的位置，前面的都置为0，该位置为1
    let index = stack.indexOf(0);
    for(let i = 0; i < index; i++) {
      stack[i] = 0;
    }
    stack[index] = 1;

    for(let i = 0; i < stack.length; i++) {
      if(stack[i] === 1) {
        count++;
      }
    }
  }
  return count;
}