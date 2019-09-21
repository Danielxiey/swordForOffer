function Power(base, exponent) {
  let result = 1;
  if(exponent > 0) {
    for(let i = 1; i <= exponent; i++) {
      result *= base;
    }
  } else if(exponent < 0) {
    if(base == 0) {
      return Infinity;
    } else {
      exponent = -exponent;
      for(let i = 1; i <= exponent; i++) {
        result *= base;
      }
      result = 1 / result;
    }
  }
  return result;  
}