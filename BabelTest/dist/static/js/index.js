"use strict";

{
    var pai = 3.14;
}
console.log(pai);
{
    //块级作用域
    var x = 3.14;
    console.log(x);
}
//console.log(x);

// 2.const 常量 常量的值不可修改
// const nums = 10;
// nums = 20;

// 3.解构与赋值
var name = "橙",
    age = 18,
    gender = "保密";

console.log("\n    \u59D3\u540D\uFF1A " + name + "\n    \u5E74\u9F84\uFF1A " + age + "\n    \u6027\u522B\uFF1A " + gender + "\n");

var _pername$address = {
    pername: "Admin",
    address: "成都市"
},
    pername = _pername$address.pername,
    locations = _pername$address.address;

console.log("\n    \u59D3\u540D\uFF1A" + pername + "\n    \u5730\u5740\uFF1A" + locations + "\n");

function minAndMax(nums) {
    var min = nums[0];
    var max = nums[0];
    nums.forEach(function (num) {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return { min: min, max: max };
}
console.log(minAndMax([1, 6, 6, 2]));

var showInfos = function showInfos(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log("\n    \u59D3\u540D:" + name + "\n    \u5E74\u9F84:" + age + "\n    ");
};
showInfos({
    name: "张三",
    age: 24
});

// let name = "张三",
//     age = 34;
// showInfos{name,age};

// 交换值
var x1 = 40,
    x2 = 30;
var _ref2 = [x2, x1];
x1 = _ref2[0];
x2 = _ref2[1];

console.log(x1);
console.log(x2);