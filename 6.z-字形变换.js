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

  if(numRows === 1) return s;
  if(sLength <= numRows) return s;

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
    const firstInterval = numRows * 2 - i * 2 - 2;
    const secondInterval = interval - firstInterval;
    let flag = false;
    for(
      let j = i; 
      j < sLength; 
      flag = !flag, j += flag ? firstInterval: secondInterval
    ) {
      result += s[j];
    }
  }
  return result;
};
