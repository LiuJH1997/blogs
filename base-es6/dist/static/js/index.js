"use strict";

$(function () {
   //箭头函数 =>
   var sayHello = function sayHello() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "petter";

      console.log("hello," + name);
   };
   sayHello("admil");

   var sum = function sum(a, b) {
      console.log(a + b);
   };
   sum(10, 5);
   var total = function total() {
      for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
         nums[_key] = arguments[_key];
      }

      // ...nums: rest 参数
      // 存储所有调用时传递的参数
      // 其类型未数组Array
      var res = 0;
      nums.forEach(function (num) {
         res += num;
      });
      return res;
   };
   console.log(total(1, 2)); //3
   console.log(total(1, 3, 2)); //6

   var numbers = [1, 4, 5, 2, 8, 9];
   console.log("max : " + Math.max.apply(Math, numbers));
   console.log("min : " + Math.min.apply(Math, numbers));

   var per = new Person("耀哥", 30);
   console.log(per);
   //调用对象方法
   per.description();

   //静态方法
   Person.play("篮球");

   var sayHi = function sayHi() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "newname";

      console.log("hi," + name);
   };
   sayHi("大铭");
});