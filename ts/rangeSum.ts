class NumArray {
  numArray: number[];
  constructor(nums: number[]) {
    this.numArray = nums;
  }

  sumRange(left: number, right: number): number {
    let sum = 0;
    while (left <= right) {
      sum += this.numArray[left];
      left++;
    }
    return sum;
  }
}
