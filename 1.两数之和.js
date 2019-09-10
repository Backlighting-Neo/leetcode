/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const temp = {};  // key-差值 value-上一个的index
  for(let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if(isNaN(temp[num])) temp[target - num] = index;
    if(!isNaN(temp[num]) && temp[num] !== index) return [temp[num], index];
  }
};
