// Exercise1-data styles
// let a = 5;
// let b = 5;
// let c = a + b;
// console.log(c);
// let d = a - b;
// console.log(d);
// let e = a * b;
// console.log(e);
// let f = a / b;
// console.log(f);

// Exercise2-data styles
// var today = 'Sunday';
// var isCloudy = true;
// var currentTemperature = 30;
// console.log(today);
// console.log(isCloudy);
// console.log(currentTemperature);

//Exercise3-Objects
// var person = {
//     name: 'Ho Van Trong',
//     age: 25,
//     gender: 'male'
// };
// console.log(person.name +' '+ person.age +' '+ person.gender);

// Exercise4-Array list
// var Dog = {
//     name: 'Lucky',
//     age: 2
// };
// console.log(Dog.name + ' ' + Dog.age);

// Exercise5-Arithmetic operator
// var a =10;
// var h = 5;
// var s = 1/2*(a*h)
// console.log(s +' '+ 'm2');

//Exercise6 - increment, decrement
// var a = 10;
// var b = 18;
// var x = a-- + b++ - ++b - ++a; 
// // 10 + 18 - 19 - 11 = 28 - 30 = -2
// console.log(x);

//Exercise7 - assignment
// var a = 5;
// var b = 10;
// var c = 10;
// var d = 10;
// var e = 10;
//  b += a;
//  c -= a;
//  d *= a;
//  e /= a;
// console.log(b +' '+ c +' '+ d +' '+ e);

//Exercise8 - Function
// function getBoxVolume(w, h, l) {
//     let s = w * l;
//     let v = s * h;
//     return v;
// }
// console.log(getBoxVolume(10, 20, 30)); // 6000
// console.log(getBoxVolume(4, 5, 6)); // 120

//Exercise9 - object method
// var rectangle = {
//     width: 5,
//     height: 6
// };
// function getWidth(){
//     return rectangle.width;
// };
// console.log(getWidth());
// function getHeight(){
//     return rectangle.height;
// };
// console.log(getHeight());
// function getArea(){
//     return rectangle.width * rectangle.height;
// };
// console.log(getArea());

//Exercise10 - comparison
// var a = [1, 2];
// var b = [1, 2];
// console.log(a[0] === b[0]); //true
// console.log(a === b); //false

// var a = '1000';//String
// var b = '200';//String
// console.log(a > b);//false

// var a = 1000;//number
// var b = 200;//number
// console.log(a > b);//true

//Exercise11 - loop
// var a = [1, 2, 4, 8, 16];
// for (let i=0;i < a.length;i++){
//     console.log(a[i]);//print =>
// };
// for (let i = a.length-1;i >= 0;i--){
//     console.log(a[i]);//print <=
// };

// var a = [1, 2, 3, 4, 5];
// var b = [10, 20, 30];
// for (let i = 0;i < b.length;i++){
//     for (let j = 0;j < a.length;j++){
//         console.log(a[j]*b[i]);
//     }
// }

// function calculate(start, end) {
//     let s=1;
//     for(let i = start;i < end;i++){
//         s *=i;
//     }
//     return s;
// }
// console.log(calculate(2, 5))

//Exercise12 - For in , for of
// function multiply(arr) {
//     let s=1;
//     for(let value of arr){
//         s*=value;
//     }
//     return s;
// }
// console.log(multiply([2, 3, 4])); // expect: 24

// var apartment = {
//     bedroom: {
//         area: 20,
//         bed: {
//             type: 'twin-bed',
//             price: 100
//         }
//     }
// };
// function getKey(object){
//     for(const key in object){
//         console.log(key)
//         for(const keyBedRoom in object[key]){
//             console.log(keyBedRoom)
//             for(const keyBed in object[key][keyBedRoom]){
//                 console.log(keyBed)
//         }
//         }
//     }
// }
// getKey(apartment);

//Exercise13 - Array method
// const arrNumber = [1,2,5,4,7,5]
// arrNumber.push(7);// them phan tu cuoi mang
// arrNumber.pop();// xoa phan tu cuoi
// arrNumber.unshift(15);// them phan tu o dau
// arrNumber.shift();//xoa phan tu o dau
// arrNumber.splice(1,4);//xoa phan tu o giua bat dau tu index 1 den 4
// arrNumber.splice(1,2,20,21,22,23);// them o giua: them mang vao index 1, xoa index 1 2 tinh tu mang duoc them vao la index 0
// console.log(arrNumber.slice(0,3))
// console.log(arrNumber);

// function removeEnd(arr,n){
//     arr.splice(arr.length - n,n)
//     return arr
// }
// console.log(removeEnd([2,3,1,8,9,7],3))

// function first(arr, n) {
//     return arr.slice(0,n)
// }
// console.log(first([1, 2, 3], 2)); // expect [1, 2]

//Exercise14 - CallBack
 function transform(numbers, callback) {
     const newArr = []
     for (const value of numbers){
         newArr.push(callback(value))
     }
     return newArr;
}
function double(num) {
    return num * 2;
}
var output = transform([2, 4, 6], double);
console.log(output);
// Expect: [4, 8, 12]
    