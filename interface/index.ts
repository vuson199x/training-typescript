export interface hasPrint {
  print(): string; //Những class implement interface này thì bắt buộc phải có hàm print()
}

export interface hasPayment {
  person: string;
  price: number;
  job: string;
  printPayment(): string;
  alertPayment(amount: number): number;
}
