/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s === '') return true;
  const arr = [];
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if(char === ')' && arr.pop() !== '(') return false;
    if(char === ']' && arr.pop() !== '[') return false;
    if(char === '}' && arr.pop() !== '{') return false;
    if(char === '(' || char === '[' || char === '{') arr.push(char);
  }
  return arr.length === 0;
};
