import { IPaymentMethod } from "./payment-method.interface";

export class CreditCardPayment implements IPaymentMethod {
  processCreditCardPayment() {
    // Código para processar o pagamento via cartão de crédito
  }

  processPaypalPayment(): void {
    // Código para processar o pagamento via Paypal
  }
}