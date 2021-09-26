interface CatInterface {
  id: number;
  name: string;
}

class Cat {
  public static cat: string = "coca";
  static tasks: CatInterface[];

  constructor(cat: string, tasks: CatInterface[]) {
    Cat.cat = cat;
    Cat.tasks = tasks;
  }

  getItems() {
    return Cat.tasks;
  }

  static printInfo(): void {
    for (let task of Cat.tasks) {
      console.log(`${Cat.cat} - ${task.name}`);
    }
  }
}

let Arr = new Cat("Coca", [
  { id: 1, name: "Eat" },
  { id: 2, name: "Drink" },
  { id: 3, name: "Sleep" },
]);

console.log(Arr.getItems);

// Đối với những func và properties có dạng là static, không cần khai báo ĐỐI TƯỢNG cũng có thể truy cập ở bên ngoài
Cat.printInfo();
console.log(Cat.cat);
