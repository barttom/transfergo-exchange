import { createGlobalStyle } from 'styled-components';
import { normalizeCss } from './normalizeCss';
import '@fontsource/roboto';

export const GlobalStyles = createGlobalStyle`
  ${normalizeCss}
  body {
    font-family: Roboto, sans-serif;
    line-height: 1.333;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background: ${({ theme }) => theme.colors.gallery};
  }
`;
