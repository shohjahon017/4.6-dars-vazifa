//1-masala
// let num = +prompt("Sonni kiriting");
// let res = [];
// for (let i = 1; i <= num; i++) {
//   res.push(i);
// }
// console.log(res);

//2-masala
// let num = [1, 2, 3, 6, 59, 14, 2, 1, 56, 44, 8];
// let oddNumber = [];
// let pairNumber = [];
// let sum = 0;
// for (let i = 0; i <= num.length; i++) {
//   if (num[i] % 2 == 1) {
//     sum += num[i];
//     // oddNumber.push(sum);
//   } else {
//   }
// }
// console.log(sum);

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
let arr = [14, 5, 2, 3, 6, 9, 10];
if (arr.length > 0) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(Math.pow(min, 4));
}

//2-masala
// let arr = [2, 1, "salom", 5, 63, 6, "bye"];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     res.push(arr[i]);
//   }
// }
// console.log(res.length);
