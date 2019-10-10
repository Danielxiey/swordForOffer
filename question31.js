function NumberOf1Between1AndN_Solution(n) {
  if(n < 1) {
    return 0;
  } 
  let divide = 10;
  let bit = 1;
  while(n / divide >= 1) {
    divide *= 10;
    bit++;
  }
  divide /= 10;

  let count = 0;
  while(n) {
    let p = Math.floor(n / divide);
    bit--;
    count += p * bit * Math.pow(10, bit - 1);
    if(p >= 2) {
      count += divide;
    } else {
      count += n % divide + 1;
    }

    n = n % divide;
    divide /= 10;
  }

  return count;
}