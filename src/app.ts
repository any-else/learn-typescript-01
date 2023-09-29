// let fullName: string = "Bui Van Vu";
// let age: number = 18;
// let isMale: boolean = true;
// let address: null = null;
// let isLove: undefined = undefined;

// //cách 1
// const student: {
//   fullName: string;
//   age: number;
//   isMale: boolean;
// } = {
//   fullName: "Bui Van Vu",
//   age: 18,
//   isMale: true,
// };

// //cách 2
// type Student = {
//   fullName: string;
//   age: number;
//   isMale: boolean;
// };
// const student1: Student = {
//   fullName: "Bui Van Vu",
//   age: 18,
//   isMale: true,
// };
// //cách 3
// interface Student2 {
//   fullName: string;
//   age: number;
//   isMale: boolean;
// }
// const student2: Student2 = {
//   fullName: "Bui Van Vu",
//   age: 18,
//   isMale: true,
// };

// //Array
// interface Student3 {
//   fullName: string;
//   age: number;
//   isMale: boolean;
//   isLove: boolean;
// }
// const listStudent: Student3[] = [
//   { fullName: "Bui Van Vu", age: 18, isMale: true, isLove: true },
//   { fullName: "Bui Van Van", age: 18, isMale: true, isLove: true },
//   { fullName: "Bui Van A", age: 18, isMale: true, isLove: true },
//   { fullName: "Bui Van B", age: 18, isMale: true, isLove: false },
// ];

// const listNumber: number[] = [1, 2, 3, 4, 5];

// //Function

// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(2, 3));

// //nếu ko khai báo tự động hiểu cái mà mình return

// import { twoSum } from "./chua-bai/bai1";

import { isCheckBracket } from "./chua-bai/bai2";
console.log(isCheckBracket("{([)]}"));
