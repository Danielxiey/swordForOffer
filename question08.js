function jumpFloor(number) {
  if(number == 0) {
    return 0;
  } else if(number == 1) {
    return 1;
  } else if(number == 2) {
    return 2;
  }
  let a = 1;
  let b = 2;
  let temp;
  for(let i = 3; i <= number; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}