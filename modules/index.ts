import { Payment } from "../classes";
import { hasPayment } from "../interface";

const Order: hasPayment = new Payment("Sơn", "dev", 500);
Order.alertPayment(1000);
Order.printPayment();

console.log(Order);
