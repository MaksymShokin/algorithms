const minVal = (arr: number[]) => Math.min(...arr);

console.log(minVal([1, 4, 5, 5, 4, 2, -1, -5]));

// time complexity O(n)

const isEven = (num: number) => num % 2 === 0;

// time complexity O(1)

console.log(isEven(8));
console.log(isEven(9));
