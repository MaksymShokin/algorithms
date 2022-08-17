const fib = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return fib(n - 2) + fib(n - 1);
};

const fib2 = (n: number): number => {
  let sum = 2;
  let prev = 1;

  for (let i = 1; i < n - 1; i++) {
    let oldPrev = prev;
    prev = sum;
    sum = oldPrev + sum;
  }

  return sum;
};

const fibWithMemo = (n: number, memo: Record<number, number>): number => {
  let result: number;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  }
  memo[n] = result;
  return result;
};

console.log(fib(5));
console.log(fib2(5));
