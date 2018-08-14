$(function(){
   //箭头函数 =>
   let sayHello = (name = "petter") => {
    console.log(`hello,${name}`);
   };
   sayHello("admil");

   let sum = (a,b) => {
       console.log(a+b);
   }
   sum(10,5);
   let total = (...nums) => {
       // ...nums: rest 参数
       // 存储所有调用时传递的参数
       // 其类型未数组Array
       let res = 0;
       nums.forEach( num => {
           res += num;
       });
       return res;
   }
   console.log(total(1,2)); //3
   console.log(total(1,3,2));//6

   let numbers = [1,4,5,2,8,9];
   console.log(`max : ${Math.max(...numbers)}`);
   console.log(`min : ${Math.min(...numbers)}`);
   
   let per = new Person("耀哥",30);
   console.log(per);
   //调用对象方法
   per.description();

   //静态方法
   Person.play("篮球");

   let sayHi = (name = "newname") => {
       console.log(`hi,${name}`);
   }
   sayHi("大铭");

   
});

