import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | ReactElement | string;
  fullWidth?: boolean;
  variant?: 'primary' | 'ico';
};

export const Button = ({
  children,
  fullWidth = false,
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <ButtonStyled type="button" fullWidth={fullWidth} variant={variant} {...props}>
    {children}
  </ButtonStyled>
);
