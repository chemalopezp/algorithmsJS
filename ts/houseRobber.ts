function rob(nums: number[]): number {
  if (nums.length <= 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(...nums);
  }
  const robThisHouse = nums[0] + rob(nums.slice(2));
  const robNextHouse = nums[1] + rob(nums.slice(3));
  if (robThisHouse >= robNextHouse) {
    return robThisHouse;
  } else {
    return robNextHouse;
  }
}
