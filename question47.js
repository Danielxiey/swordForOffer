function Sum_Solution(n) {
  let sum = 0;

  const countSum = (n) => {
    sum += n;
    n > 0 && countSum(--n);   //利用逻辑与&&,来进行条件判断
  }

  countSum(n);
  return sum;
}

console.log(Sum_Solution(10));