export interface CardProps {
  id: number;
  currency: string;
  image: string;
  name: string;
  onClick: (id: number, currency: string, amount?: number) => void;
}