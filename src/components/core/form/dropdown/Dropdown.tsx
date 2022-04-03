import React, { useMemo } from 'react';
import Select, { Props, StylesConfig } from 'react-select';
import { useTheme } from 'styled-components';
import { FieldProps, ErrorMessage, FieldLabel, FieldWrapper } from '../index';

export type DropdownProps = Props & FieldProps;

export const Dropdown = ({ label, error, name, ...restProps }: DropdownProps) => {
  const { colors, fontSize } = useTheme();
  const selectStyles = useMemo<StylesConfig>(
    () => ({
      control: (styles) => ({
        ...styles,
        borderWidth: '0',
        borderBottom: `2px solid ${colors.linkWater}`,
        outline: 'none !important',
        boxShadow: 'none !important',
        borderRadius: 0,
        minHeight: 59,
        '&:hover': {
          borderColor: colors.linkWater,
        },
      }),
      indicatorSeparator: () => ({ display: 'none' }),
      option: (styles) => ({
        ...styles,
        fontSize: fontSize.regular,
      }),
      singleValue: (styles) => ({
        ...styles,
        fontSize: fontSize.large,
      }),
      placeholder: (styles) => ({
        ...styles,
        fontSize: fontSize.large,
      }),
      valueContainer: (styles) => ({
        ...styles,
        paddingLeft: 0,
      }),
      input: (styles) => ({
        ...styles,
        fontSize: fontSize.large,
      }),
    }),
    [colors, fontSize],
  );

  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Select name={name} styles={selectStyles} {...restProps} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldWrapper>
  );
};
