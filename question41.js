function FindContinuousSequence(sum) {
  if(!sum || sum < 3) {
    return [];
  }
  let small = 1, big = 2;
  let total = small + big;
  let limit = Math.floor(sum / 2);
  let result = [];
  while(small <= limit) {
    if(total < sum) {
      big++;
      total += big;
    } else if(total > sum) {
      total -= small;
      small++;
    } else if(total == sum) {
      let temp = [];
      for(let i = small; i <= big; i++) {
        temp.push(i);
      }
      result.push(temp);
      big++;
      total += big;
    }
  }
  return result;
}