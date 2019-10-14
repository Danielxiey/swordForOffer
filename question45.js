function IsContinuous(numbers) {
  if(!numbers || numbers.length == 0) {
    return false;
  }
  numbers.sort(function(a, b) {
    return a - b;
  });

  count0 = numbers.lastIndexOf(0) + 1;
  for(let i = count0; i < numbers.length - 1; i++) {
    if(numbers[i] == numbers[i + 1]) {
      return false;
    }else if(numbers[i + 1] - numbers[i] != 1) {
      if(count0 >= numbers[i + 1] - numbers[i] - 1) {
        count0 -= numbers[i + 1] - numbers[i] - 1;
      } else {
        return false;
      }
    }
  }
  return true;
}