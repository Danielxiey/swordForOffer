function LeftRotateString(str, n) {
  if(!str || n < 0 || n > str.length) {
    return '';
  }
  let strLeft = str.slice(0, n);
  let strRight = str.slice(n);
  return strRight + strLeft;
}

console.log(LeftRotateString('abcXYZdef', 0));