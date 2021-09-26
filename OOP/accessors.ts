class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}`);
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

let Cource = new Person("Son");
console.log(Cource.name);

Cource.name = "Vu Son";
console.log(Cource.name);

/**
 * Đối với private, nếu muốn truy cập ngoài class thì phải khai báo getter setter
 * Thuộc tính khai báo phải có dấu _ đằng trước
 */
