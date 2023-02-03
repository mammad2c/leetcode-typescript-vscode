// write your code here
function containsDuplicate(nums: number[]): boolean {
  const members: Record<string, any> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (members[num]) {
      return true;
    }

    members[num] = true;
  }

  return false;
}
