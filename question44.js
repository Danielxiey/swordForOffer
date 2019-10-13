function ReverseSentence(str) {
  if(!str || str.length == 0) {
    return '';
  }
  let strArr = str.split(' ');
  strArr.reverse();
  return strArr.join(' ');
}