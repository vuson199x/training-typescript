export interface hasPrint {
  print(): string;
}

export interface hasPayment {
  person: string;
  price: number;
  job: string;
  printPayment(): string;
  alertPayment(amount: number): number;
}

/**
 * Những class implement interface này thì bắt buộc phải định nghĩa lại các hàm có trong interface
 * 1 class có thể implement nhiều interface
 */
