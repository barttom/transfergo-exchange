import React from 'react';
import InputNumber, { InputNumberProps } from 'rc-input-number';
import {
  FieldProps,
  CurrencyInputWrapper,
  CurrencyLabel,
  ErrorMessage,
  FieldLabel,
  FieldWrapper,
} from '../index';

export type CurrencyInputProps = InputNumberProps & FieldProps & { currency: string };

export const CurrencyInput = ({ name, label, error, currency, ...props }: CurrencyInputProps) => {
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <CurrencyInputWrapper>
        <InputNumber
          name={name}
          min={0}
          precision={2}
          decimalSeparator="."
          controls={false}
          {...props}
        />
        <CurrencyLabel>{currency}</CurrencyLabel>
      </CurrencyInputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldWrapper>
  );
};
