export interface CardProps {
  id: number;
  name: string;
  currency: string;
  image: string;
  onClick: (id: number, currency: string, amount?: number) => void;
}