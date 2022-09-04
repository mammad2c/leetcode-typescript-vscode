// write your code here
function canSum(
  target: number,
  arr: number[] = [],
  memo: Record<string, boolean> = {}
): boolean {
  const arrLength = arr.length;

  const key = arr.join("+");

  if (memo[key]) {
    return memo[key];
  }

  if (arrLength === 0) return false;

  if (arrLength === 1) {
    return arr.includes(target);
  }

  const sum = arr.reduce((a, c) => {
    return a + c;
  }, 0);

  if (sum === target) {
    return true;
  }

  const newArrays: Array<number[]> = [];

  for (let i = 0; i < arrLength; i++) {
    const newArr = arr.filter((_, index) => {
      return index !== i;
    });

    newArrays.push(newArr);
  }

  memo[key] = newArrays.some((_, index) => {
    return canSum(target, newArrays[index]);
  });

  return memo[key];
}

console.log(canSum(7, [3, 2, 1, 5]));
