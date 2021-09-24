// Basic types

// 1. Typescript Function
let speak: Function;
speak = (): void => console.log("meow meow"); // Kiểu void là không return về gì cả

let sleep: Function;
sleep = (): string => {
  // Kiểu string | number | boolean là phải return
  return "go to sleep";
};

// 2. Typescript Types
let firstname: string; // String
let sex: number; // Number
let isMale: boolean; // Boolean
let id: string | number; // Hoặc string hoặc number
id = "123";
id = 123;
let cookie: "rice" | "noods" | 3 | true; // Data bắt buộc phải = 1 trong 4 kiểu sau đây
cookie = "rice";
cookie = "noods";
cookie = 3;
cookie = true;

// 3. Typescript Object
let obj: object;
obj = {
  lang: "Typescript",
  version: 1.8,
};
obj = []; // Trong JS, Array cũng đc xem là 1 object

let students: {
  name: string;
  age: number;
  address: string;
};
students = {
  name: "Sơn",
  age: 23,
  address: "HN",
};

// 4. Typescript Array
let mixed: string[]; // Array kiểu string
mixed = ["hello", "world", "typescript"];

let spend: number[]; // Array kiểu number
spend = [10, 20, 30];

let communicate: (string | number | boolean)[]; //  Array kiểu union
communicate = [20, true, "kiểu gì cũng chơi"];

/**
 *  Lưu ý:
 * - a! với ! là bắt buộc phải có.
 * - a? với ? là có hoặc không
 */
