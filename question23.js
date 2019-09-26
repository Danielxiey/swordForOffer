function VerifySquenceOfBST(sequence) {
  if(!sequence || sequence.length == 0) {
    return false;
  }
  const isBST = (sequence) => {
    if(sequence.length <= 1) {
      return true;
    }
    let root = sequence[sequence.length - 1];
    let index;
    for(let i = 0; i < sequence.length; i++) {
      if(sequence[i] >= root) {
        index = i;
        break;
      }
    }
    let leftSeq;
    let rightSeq;
    if(index == sequence.length - 1) {
      leftSeq = sequence.slice(0, sequence.length - 1);
      rightSeq = [];
    } else {
      leftSeq = sequence.slice(0, index);
      rightSeq = sequence.slice(index, sequence.length - 1);
    }
    
    for(let i = 0; i < rightSeq.length; i++) {
      if(rightSeq[i] < root) {
        return false;
      }
    }
    let left = true;
    let right = true;
    if(leftSeq) {
      left = isBST(leftSeq);
    }
    if(rightSeq) {
      right = isBST(rightSeq);
    }
    return left && right;
  }
  
  return isBST(sequence);
}