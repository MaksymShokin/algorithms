const factorial = (n: number) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const factorialRecursion = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return factorialRecursion(n - 1) * n;
};

console.log(factorial(5));
console.log(factorialRecursion(5));

