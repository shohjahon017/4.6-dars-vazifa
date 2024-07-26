//1-masala
// let num = +prompt("Sonni kiriting");
// let res = [];
// for (let i = 1; i <= num; i++) {
//   res.push(i);
// }
// console.log(res);

//2-masala
// let num = [1, 2, 3, 6, 59, 14, 2, 1, 56, 44, 8];
// let sum = 0;
// let sum1 = 0;
// for (let i = 0; i <= num.length; i++) {
//   if (num[i] % 2 == 1) {
//     sum += num[i];
//   } else if (num[i] % 2 == 0) {
//     sum1 += num[i];
//   }
// }
// console.log(sum, sum1);

//3-masala
// let arr1 = [1, 2, 5, 3, 6, 4, 5];
// let arr2 = [5, 9, 6, 5, 7, 3];
// let sum = 0;
// let res = arr1.concat(arr2);
// for (let i = 0; i < res.length; i++) {
//   sum += res[i];
// }
// console.log(sum);

//4-masala
// let arr = ["salom", 2, 5, 36, 8];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   res.unshift(arr[i]);
// }
// console.log(res);

//5-masala
// let arr = [14, 5, 2, 3, 6, 9, 10];
// if (arr.length > 0) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log(Math.pow(min, 4));
// }

//1-masala

//2-masala
// let arr = [2, 1, "salom", 5, 63, 6, "bye"];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     res.push(arr[i]);
//   }
// }
// console.log(res.length);

//3-masala
// let arr = [1, 6, 9, 5, 2];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr[i]++;
//   }
// }
// console.log(arr);

//4-masala
// let arr = [1, 25, 3, 96, 54, 8, 1, 9, 16];
// arr.reverse();
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     arr[i] = 0;
//   }
// }
// console.log(arr);

//5-masala
// let arr = [12, 14, 5, 6, 9, 42, 7];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i;
// }
// console.log(arr);

//6-masala
// let arr = [5, 6, 7, 9, 15, 52, 3];
// let newMassiv = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 !== 0) {
//     newMassiv.push(arr[i]);
//   }
// }
// console.log(newMassiv);

//7-masala
// let arr = [5, 2, 6, 8, 7, 14];
// let newMassiv = [];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (arr[i] % sum == 0) {
//     newMassiv.push(arr[i]);
//   }
// }
// console.log(newMassiv);

//8-masala
// let arr = [9, 2, 3, 6, 65, 9, 8];
// for (let i = 0; i < arr.length; i++) {
//   arr[i]--;
// }
// console.log(arr);

//9-masala
// let arr = [5, -6, 8, 4, -7, -8, 12];
// let newMassiv = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     newMassiv.push(arr[i]);
//   }
// }
// console.log(newMassiv.length);

//10-masala
// let arr = [1, -5, 68, -6, -8, 92, -3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

//11-maasla
// let arr = ["salom", "bye", "xayr"];
// let newMassiv = [];
// for (let i = 0; i < arr.length; i++) {
//   newMassiv[i] = arr[i].toUpperCase();
// }
// console.log(newMassiv);

//12-masala
// let arr = [1, 5, 3, -6, -8, 6, -12];
// let p = 1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     p *= arr[i];
//   }
// }
// console.log(p);

//13-masala
// let arr = ["salom", "bolalar", "xayr", "maktab"];
// let uzun = arr[0];
// let qisqa = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > uzun.length) {
//     uzun = arr[i];
//   }
//   if (arr[i].length < qisqa.length) {
//     qisqa = arr[i];
//   }
// }
// console.log(uzun, qisqa);
