class Dog {
  public name: string;
  protected color: string;
  private _age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this._age = age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(v: number) {
    this._age = v;
  }

  getInfo(): void {
    console.log(
      `Name: ${this.name} - Color: ${this.color} - Age: ${this._age}`
    );
  }
}

class Husky extends Dog {
  public isMale: boolean;
  constructor(name: string, color: string, age: number, isMale: boolean) {
    super(name, color, age);
    this.isMale = isMale;
  }

  printInfo(): void {
    super.getInfo();
    console.log(
      `Name: ${this.name} - Color: ${this.color} - Age: ${this.age}  - isMale: ${this.isMale}`
    );
  }
}

let Coca = new Husky("Coca", "white", 1, true);
Coca.printInfo();
