function multiply(array) {
  if(!array || array.length == 0) {
    return [];
  }
  
  let pros = [1];
  for(let i = 0; i < array.length - 1; i++) {
    pros[i + 1] = pros[i] * array[i];
  }

  let consTotal = 1;
  let result  = [];
  for(i = pros.length - 1; i >= 0; i--) {
    result.unshift(pros[i] * consTotal);
    consTotal *= array[i];
  }
  return result;
}