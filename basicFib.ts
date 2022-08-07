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

console.log(fib(5));
console.log(fib2(5));
