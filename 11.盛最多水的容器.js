/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let result = -1;
  for(i = 0; i < height.length - 1; i++){
    for(j = i+1; j< height.length; j++) {
      const h = height[i] < height[j] ? height[i] : height[j];
      const a = h * (j - i);
      if(a > result) result = a;
    }
  }
  return result;
};

