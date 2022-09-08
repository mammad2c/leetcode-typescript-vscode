const sum = (arr) => {
  count += 1;
  console.log({ arr });

  return arr.reduce((acc, x) => acc + x, 0);
};

let count = 0;
const canSum2 = (target, numArr, memo = {}) => {
  let mask = "";
  for (let i = 0; i < 2 ** numArr.length; i++) {
    mask = i.toString(2).padStart(numArr.length, "0");
    maskedArr = numArr.filter((_, i) => +mask[i]);
    // console.log({ mask, maskedArr });
    const key = maskedArr.join(",");

    memo[key] = memo[key] ?? sum(maskedArr) === target;

    if (memo[key]) {
      return true;
    }
  }
  return false;
};

const canSum = (target, numArr, memo = {}) => {
  count += 1;
  const key = numArr.join(",");

  if (key in memo) {
    return memo[key];
  }

  if (sum(numArr) === target) {
    return true;
  }

  const temp = numArr
    .map((_, i) => numArr.filter((__, j) => i !== j))
    .filter((arr) => arr.length);
  for (const arr of temp) {
    if (canSum(target, arr, memo)) {
      memo[key] = true;
      return true;
    }
  }
  memo[key] = false;
  return false;
};

const solve = (target, numArr) => {
  return canSum2(target, numArr);
};

// console.log(solve(7, [1, 2, 3, 5]), count);
console.log(solve(300, [7, 14]), count);
