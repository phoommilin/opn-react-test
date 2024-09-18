import { CheckedRadio, CustomRadio, RadioLabel, HiddenRadio } from './styles';

import { PaymentLabelProps } from './types';

export default function PaymentLabel({
  id,
  amount,
  onClick,
  checked,
}: PaymentLabelProps) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
      }}
    >
      <HiddenRadio id={id.toString()} onClick={onClick} />
      {checked ? <CheckedRadio /> : <CustomRadio />}
      <RadioLabel htmlFor={id.toString()}>{amount}</RadioLabel>
    </label>
  );
}
