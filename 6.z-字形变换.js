/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let result = '';
  const sLength = s.length;
  const interval = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    if(i === 0) {
      for(let j = 0; j < sLength; j += interval) {
        result += s[j];
      }
      continue;
    }
    if(i === numRows - 1) {
      for(let j = numRows - 1; j < sLength; j += interval) {
        result += s[j];
      }
      continue;
    }
    gtihub
  }
};

