function Add(num1, num2) {
  let sum, carry;
  do {
    sum = num1 ^ num2;
    carry = num1 & num2;
    num1 = sum;
    num2 = carry << 1;
  } while(num2 != 0);
  return sum;
}

console.log(Add(12, 3));