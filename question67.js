function cutRope(number) {
  if(!number || number < 2) {
    return 0;
  }
  if(number == 2) {
    return 1;
  }
  if(number == 3) {
    return 2;
  }

  let stack = [0,1,2,3];
  for(let i = 4; i <= number; i++) {
    let max = 0;
    for(let j = 1; j <= Math.floor(i / 2); j++) {
      if(stack[j] * stack[i - j] > max) {
        max = stack[j] * stack[i - j];
      }
    }
    stack[i] = max;
  }

  return stack[number];
}