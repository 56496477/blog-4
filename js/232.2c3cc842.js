(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{884:function(n,t){n.exports="### 279. Perfect Squares\n\nGiven a positive integer n, find `the least number` of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.\n\nExample 1:\n\n```js\nInput: n = 12\nOutput: 3\nExplanation: 12 = 4 + 4 + 4\n```\n\nExample 2:\n\n```js\nInput: n = 13\nOutput: 2\nExplanation: 13 = 4 + 9.\n```\n\n### Analyze\n\n题目转化: 数字 n 到 0 最少能由几个平方数相加得到?\n\n首先思考能否使用贪心算法, 比如针对数字 12, 使用贪心算法先取能使用最大的数字 9, 结果为 9 1 1 1, 长度为 4; 但其实是有更短长度的答案 4 4 4 的, 因此不能使用贪心算法。\n\n建模: 构建树的数据结构:\n\n![](http://with.muyunyun.cn/1ec5a5a75516e0ae7fa96c9c9a74bd79.jpg)\n\n比如数字 5 到 0 的路径可以是\n\n1. `5 -> 1 -> 0`;\n2. `5 -> 4 -> 0`;\n3. `5 -> 4 -> 3 -> 2 -> 1 -> 0`;\n\n```js\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  const list = []\n  list.push({ num: n, step: 0 })\n\n  while (list.length > 0) {\n    const { num, step } = list.shift()\n    if (num === 0) return step\n    for (let i = 1; num - i * i >= 0; i++) {\n      list.push({ num: num - i * i, step: step + 1 })\n    }\n  }\n}\n```\n\n此时提交代码, 运行超时。\n\n进行分析, 以从 5 到达 1 为例, 有如下方式 ①: `5 -> 1`; ②: `5 -> 4 -> 3 -> 2 -> 1`; 显然不会采用第二种方式, 因此可以省略步骤二访问 1 的操作的。\n\n使用`树的数据结构`时, 到达一个节点的路径是`唯一确定`的, 与之相对地在使用`图的数据结构`时, 到达一个节点的方式可能`会存在多个路径`; 为此引入 visitedObj 来存储该节点是否已经访问过, 改进代码如下:\n\n```js\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  const list = []\n  list.push({ num: n, step: 0 })\n  const visitedObj = { [n]: true }\n  while (list.length > 0) {\n    const { num, step, visited } = list.shift()\n    for (let i = 1;; i++) {\n      const extraNum = num - i * i\n      if (extraNum < 0) break\n      // this line return the result in advance, it reduces perform time very much.\n      if (extraNum === 0) return step + 1\n      if (!visitedObj[extraNum]) {\n        visitedObj[extraNum] = true\n        list.push({ num: num - i * i, step: step + 1 })\n      }\n    }\n  }\n}\n```\n\n![](http://with.muyunyun.cn/05fe8335c7c57360edd7e9d28fe3a102.jpg)\n\n### Similar Title\n\n127、126"}}]);