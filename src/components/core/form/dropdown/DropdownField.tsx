import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Dropdown, DropdownProps } from './Dropdown';

export type DropdownFieldProps = DropdownProps & { onChangeCallback?: () => void };

export const DropdownField = ({ name, label, onChangeCallback, ...props }: DropdownFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Dropdown
          name={name}
          label={label}
          onChange={(newValue) => {
            if (onChangeCallback) {
              onChangeCallback();
            }

            onChange((newValue as { value: string }).value);
          }}
          value={props.options?.find((newValue) => (newValue as { value: string }).value === value)}
          {...props}
        />
      )}
    />
  );
};
