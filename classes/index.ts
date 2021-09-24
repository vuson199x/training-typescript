import { hasPayment, hasPrint } from "../interface";

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

export class Payment implements hasPayment {
  constructor(
    readonly person: string,
    public job: string,
    public price: number
  ) {}
  printPayment() {
    return `${this.person} owns ${this.price} for this works: ${this.job}`;
  }
  alertPayment(price: number) {
    return price;
  }
}

/**
 * Class phải đáp ứng tất cả kiểu dữ liệu mà interface nó implements
 */
