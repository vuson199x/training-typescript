// Define
/**
 * Kỹ thuật sử dụng Generic là cách xây dựng các hàm, interface, lớp ...
 * trên một kiểu dữ liệu chung chung tự ký hiệu như kiểu T, kiểu K ...,
 * sau đó khi sử dụng hàm, lớp ... thì mới chỉ rõ kiểu T là gì (number, string ...), kiểu K cụ thể là gì
 */

// 1. Basic
function showInfo<T>(x: T): T {
  return x;
}
// Định nghĩa kiểu T là gì.
showInfo<boolean>(true);
showInfo<string>("Coca");
showInfo<number>(23);

// Arrow function
const makeArr = <X, Y>(x: X, y: Y) => [x, y];
const m1 = makeArr(5, 6);
const m2 = makeArr<string, number>("Coca", 6);
// ---------------------------------------------------- //

// 2. Function
class General {
  static printArray<T>(value: T[]): void {
    console.log(value);
  }
}
General.printArray<string>(["a", "b", "c"]);
General.printArray<number>([1, 2, 3, 4]);
General.printArray<any>([1, 2, 3, true, 4, "a", "b", "c", false]);
// ---------------------------------------------------- //

// 3. Class
class Product<A, B, C> {
  id: A;
  name: B;
  price: C;

  constructor(id: A, name: B, price: C) {
    (this.id = id), (this.name = name), (this.price = price);
  }

  printProduct(): void {
    console.log(`ID: ${this.id} - Name: ${this.name} - Price: ${this.price}`);
  }
}

let product1 = new Product<string, string, number>("1", "Iphone", 500);
let product2 = new Product<number, string, number>(1, "Iphone", 500);
product1.printProduct();
product2.printProduct();
