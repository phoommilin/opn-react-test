export interface PaymentLabelProps {
  id: number;
  amount: number;
  onClick: () => void;
  checked?: boolean
}