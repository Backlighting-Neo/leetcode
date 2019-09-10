/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function compute(l1, l2, carry = 0) {
  if(!l1 && !l2 && carry === 0) return null;
  if(!l1 && !l2 && carry === 1) {
    let result = new ListNode(1);
    result.next = null;
    return result;
  }
  if(!l1) {
    l1 = new ListNode(0);
    l1.next = null;
  }
  if(!l2) {
    l2 = new ListNode(0);
    l2.next = null;
  }

  let num = l1.val + l2.val + carry;
  const nextCarry = num >= 10 ? 1 : 0;
  num = num % 10;
  const result = new ListNode(num);
  result.next = compute(l1.next, l2.next, nextCarry);
  return result;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return compute(l1, l2);
};