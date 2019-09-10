/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  const length = Math.log10(x) | 0;
  const halfLength = length / 2 + 1;
  for(let i = 0; i < halfLength; i++) {
    if(
      ((x / Math.pow(10, i) % 10) | 0) !== 
      (((x / Math.pow(10, length - i)) % 10) | 0)
      ) 
      return false;
  }
  return true;
};

