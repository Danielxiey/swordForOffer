function reOrderArray(array) {
  let odd = [];
  let event = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      event.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return odd.concat(event);
}