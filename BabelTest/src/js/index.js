{
    var pai = 3.14;
}
console.log(pai);
{
    //块级作用域
    let x = 3.14;
    console.log(x);
}
//console.log(x);

// 2.const 常量 常量的值不可修改
// const nums = 10;
// nums = 20;

// 3.解构与赋值
let [name,age,gender] = ["橙",18,"保密"];
console.log(`
    姓名： ${name}
    年龄： ${age}
    性别： ${gender}
`);

let {pername,address:locations} = {
    pername:"Admin",
    address:"成都市"
}
console.log(`
    姓名：${pername}
    地址：${locations}
`);

function minAndMax(nums){
    let min = nums[0];
    let max = nums[0];
    nums.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return {min,max};
}
console.log(minAndMax([1,6,6,2]));

let showInfos = ({name,age}) => {
    console.log(`
    姓名:${name}
    年龄:${age}
    `);
}
showInfos({
    name:"张三",
    age:24
});

// let name = "张三",
//     age = 34;
// showInfos{name,age};

// 交换值
let x1 = 40,
    x2 = 30;
[x1,x2] = [x2,x1];
console.log(x1);
console.log(x2);
