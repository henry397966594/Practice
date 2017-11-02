//  function Timer(){
//      this.s1=0;
//      this.s2=0;
//      setInterval(function(){
//          this.s1++;
//      }, 1000)
//      setInterval(()=>this.s2++, 1000)
//  }
//  let timer = new Timer();
//  setTimeout(()=> console.log('s1:',timer.s1),3100)
//  setTimeout(()=> console.log('s2:',timer.s2),3100)
// let insert = (value) => ({
//     into: (array) => ({
//         after: (afterValue) => {
//             array.splice(array.indexOf(afterValue) + 1, 0, value);
//             return array;
//         }
//     })
// });

// console.log(insert(2).into([1, 3]).after(1));
//  //[1, 2, 3]
// let set = new Set(['red', 'green', 'blue']);
// let arr = [...set];

// let arr = [3, 5, 2, 2, 5, 5];
// let unique = [...new Set(arr)];
// console.log(unique);
// const myMap = new Map()
// .set(true, 7)
// .set({foo: 3}, ['abc']);
// console.log([...myMap]);


// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);

// console.log([...map.entries()]);

// (function (){
//     console.log('hello,world')
// })()
// 
// var a = "5";
// var b = "3";
// if (a < b) // true
//   console.log( (a + " is less than " + b));

// else if (a > b)
// console.log( (a + " is greater than " + b));

// else
// console.log((a + " and " + b + " are equal."));
// console.log(Boolean(''));
// console.log(Boolean('234'));
// switch ('kkk') {
//     case 'eat':
//         console.log('hello world')
//         break;
//     case 'draw':
//         console.log('fuck the world')
//         break;
//     default:
//         console.log('去死吧')
// }
//键值对
// !(function(){
//     let day = new Date().getDay();
//     switch (day) {
//         case 0:console.log('tody is sunday');
//         break;
//         case 1:console.log('tody is mondsy');
//         break;
//         case 2:console.log('tody is tuesday');
//         break;
//         case 3:console.log('tody is wednesday');
//         break;
//         case 4:console.log('tody is thursday');
//         break;
//         case 5:console.log('tody is friday');
//         break;
//         case 6:console.log('tody is saturday');
//         break;
//     }
// })()
// for(var i = 0 ;i<3;i++){
// setTimeout(function(){
//     console.log(i)
    
// },(function(){
//     var b=i*1000;
//     console.log(b);
//     return b
// })());
// }
// function Parent(hello){
//     this.hello = hello;
//   }
//   Parent.prototype.sayHello = function(){
//    console.log(this.hello);
//   }

//   function Child(hello,world){
//     Parent.call(this,hello);//将父类的属性继承过来
//     this.world = world;//新增一些属性
//   }

//   Child.prototype = new Parent();//将父类的方法继承过来

//   Child.prototype.sayWorld = function(){//新增一些方法
//     console.log(this.world);
//   }

//   var c = new Child("zhangsan","lisi");
//   c.sayHello();
//   c.sayWorld(); 
//  var num = 100;
//  var obj={
//      num:200,
//      inner:{
//          num:300,
//          print:function(){
//              console.log(this)
//             console.log(this.num);

             
//          }
//      }
//  };
//  obj.inner.print(); //300
//  var func=obj.inner.print;
//  func(); //undefind
//  (obj.inner.print)();//300
//  (obj.inner.print=obj.inner.print)()//undefined
// var a,b;
// (function(){
//   function A (arg1,arg2) {
//     this.a = 1;
//     this.b=2; 
//   }

//   A.prototype.log = function () {
//     console.log(this.a);
//   }
//   a = new A();
//   b = new A();
// })()
// a.log();
// // 1
// b.log();
// // 1
// a.constructor.prototype.log2=function(){
//     console.log(this.b);
    
// }
// a.log2();
// b.log2()

