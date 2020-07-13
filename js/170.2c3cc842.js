(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{822:function(n,e){n.exports="### 发布订阅模式\n\n事件发布/订阅模式 (PubSub) 在异步编程中帮助我们完成更松的解耦, 甚至在 MVC、MVVC 的架构中以及设计模式中也少不了发布-订阅模式的参与。\n\n优点: 在异步编程中实现更深的解耦\n\n缺点: 如果过多的使用发布订阅模式, 会增加维护的难度\n\n### 实现一个发布订阅模式\n\n```js\nvar Event = function() {\n  this.obj = {}\n}\n\nEvent.prototype.on = function(eventType, fn) {\n  if (!this.obj[eventType]) {\n    this.obj[eventType] = []\n  }\n  this.obj[eventType].push(fn)\n}\n\nEvent.prototype.emit = function() {\n  var eventType = Array.prototype.shift.call(arguments)\n  var arr = this.obj[eventType]\n  for (let i = 0; i < arr.length; i++) {\n    arr[i].apply(arr[i], arguments)\n  }\n}\n\nvar ev = new Event()\n\nev.on('click', function(a) { // 订阅函数\n  console.log(a) // 1\n})\n\nev.emit('click', 1)          // 发布函数\n```\n\n### 订阅函数逻辑一定要优先于发布函数吗\n\n考虑以下场景:\n\n```js\n$.ajax('', () => {\n  // 异步订阅函数逻辑\n})\n\n// 在其他地方执行发布函数, 此时并不能保证执行发布函数的时候, 订阅函数已经执行\n```\n\n我们需要实现这样的逻辑:\n\n```js\nvar ev = new Event()\nev.emit('click', 1)\n\nev.on('click', function(a) {\n  console.log(a) // 1\n})\n```\n\n目标明确后, 来着手实现它:\n\n```js\nvar Event = function() {\n  this.obj = {}\n  this.cacheList = []\n}\n\nEvent.prototype.on = function(eventType, fn) {\n  if (!this.obj[eventType]) {\n    this.obj[eventType] = []\n  }\n  this.obj[eventType].push(fn)\n\n  for (let i = 0; i < this.cacheList.length; i++) {\n    this.cacheList[i]()\n  }\n}\n\nEvent.prototype.emit = function() {\n  const arg = arguments\n  const that = this\n  function cache() {\n    var eventType = Array.prototype.shift.call(arg)\n    var arr = that.obj[eventType]\n    for (let i = 0; i < arr.length; i++) {\n      arr[i].apply(arr[i], arg)\n    }\n  }\n  this.cacheList.push(cache)\n}\n```\n\n以上代码实现思路就是把原本在 emit 里触发的函数存到 cacheList, 再转交到 on 中触发。从而实现了发布函数先于订阅函数执行。"}}]);