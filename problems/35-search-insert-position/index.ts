// write your code here
function searchInsert(nums: number[], target: number): number {
  let index = nums.indexOf(target);

  if (index < 0) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    index = nums.indexOf(target);
  }

  return index;
}
