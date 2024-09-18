export interface PaymentOverlayProps {
  charityId: number;
  currency: string;
  handlePay: (id: number, currency: string, amount?: number) => void;
  onClose: () => void;
}