const isPowerOfTwo = (num: number) => {
  if (num < 1) {
    return false;
  }

  while (num !== 1) {
    if (num % 2 !== 0) {
      return false;
    }

    num = num / 2;
  }

  return true;
};

const isPowerOfTwoBinary = (num: number) => {
  if (num < 1) {
    return false;
  }

  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(32));

console.log(isPowerOfTwoBinary(7));
console.log(isPowerOfTwoBinary(32));
