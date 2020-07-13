(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{897:function(n,s){n.exports="### title\n\n给定两个数组, 编写一个函数来计算它们的交集。\n\n示例 1:\n\n```js\n输入: nums1 = [1,2,2,1], nums2 = [2,2]\n输出: [2,2]\n```\n\n示例 2:\n\n```js\n输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出: [4,9]\n```\n\n说明:\n\n输出结果中`每个元素出现的次数, 应与元素在两个数组中出现的次数一致`。\n我们`可以不考虑输出结果的顺序`。\n\n进阶:\n\n如果给定的数组已经排好序呢？你将如何优化你的算法？\n如果 nums1 的大小比 nums2 小很多，哪种方法更优？\n如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？\n\n### 解题\n\n思路: 使用字典 Map 的数据结构来统计次数。\n\n1. 将 num1、nums2 各自出现的次数分别统计存进 nums1Map 与 nums2Map 中;\n2. 根据题目说明中的条件`可以不考虑输出结果的顺序`, 因而可以以 num1、nums2 相同的 key 中较小的值为输出次数, 将其输出;\n\n```js\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersect = function(nums1, nums2) {\n  const nums1Map = getMap(nums1)\n  const nums2Map = getMap(nums2)\n\n  const result = []\n\n  nums1Map.forEach((nums1Value, key) => {\n    const nums2MapHasKey = nums2Map.get(key)\n    if (nums2MapHasKey) {\n      for (let i = 0; i < Math.min(nums1Value, nums2MapHasKey); i++) {\n        result.push(key)\n      }\n    }\n  })\n\n  return result\n};\n\nvar getMap = function(arr) {\n  const map = new Map()\n  for (let i = 0; i < arr.length; i++) {\n    const getValue = map.get(arr[i])\n    if (!getValue) {\n      map.set(arr[i], 1)\n    } else {\n      map.set(arr[i], getValue + 1)\n    }\n  }\n  return map\n}\n```\n\n### 进阶\n\n如果给定的两个数组是排好序的, 是否有其它解法呢?\n\n\n\n### 相关题\n\n202、205、242、290、349、451"}}]);