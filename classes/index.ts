import { hasPayment, hasPrint } from "../interface";

// implement 1 interface
export class Person implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owns ${this.amount} for this works: ${this.work}`;
  }
}

class Bank {
  public Debt_collection(x: number, y: number): number {
    return x + y;
  }
}

// implement nhiều interface + extends class
export class Payment extends Bank implements hasPayment, hasPrint {
  constructor(
    readonly person: string,
    public job: string,
    public price: number
  ) {
    super();
  }
  printPayment() {
    return `${this.person} owns ${this.price} for this works: ${this.job}`;
  }
  alertPayment(price: number) {
    return price;
  }
  print() {
    return `${this.person} owns ${this.price} for this works: ${this.job}`;
  }
}

/**
 * Class phải đáp ứng tất cả kiểu dữ liệu mà interface nó implements
 * 1 class có thể implement nhiều interface
 * 1 class có thể vừa extends class khác vừa implement interface
 */
