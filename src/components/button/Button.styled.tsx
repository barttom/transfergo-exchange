import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import { MainTheme } from '../../theme/mainTheme';

const getVariants = (variant: ButtonProps['variant'], theme: MainTheme) => {
  switch (variant) {
    case 'primary':
      return css`
        padding: 32px;
        background: ${theme.colors.atlantis};
        color: ${theme.colors.white};
        font-size: ${theme.fontSize.regular};
      `;
    case 'ico':
      return css`
        padding: 10px;
        color: ${theme.colors.cornflowerBlue};
        font-size: 30px;
      `;
    default:
      return null;
  }
};

export const ButtonStyled = styled.button<Pick<ButtonProps, 'variant' | 'fullWidth'>>`
  display: inline-block;
  text-align: center;
  border: none;
  border-radius: 0;
  outline: none !important;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  opacity: 1;
  transition: 0.3s opacity ease;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${({ theme, variant }) => getVariants(variant, theme)}
`;
