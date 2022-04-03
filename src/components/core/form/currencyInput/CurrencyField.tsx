import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { CurrencyInput, CurrencyInputProps } from './CurrencyInput';

export type CurrencyFieldProps = CurrencyInputProps;

export const CurrencyField = ({ name, label, currency, ...props }: CurrencyFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CurrencyInput
          name={name}
          label={label}
          currency={currency}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    />
  );
};
