import styled from 'styled-components';

export const CurrencyInputWrapper = styled.div`
  width: 100%;
  position: relative;

  .rc-input-number-input {
    outline: none !important;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.linkWater};
    padding: 10px 100px 10px 0;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

export const CurrencyLabel = styled.span`
  display: inline-block;
  width: 100px;
  height: ${({ theme }) => theme.fontSize.regular};
  font-size: ${({ theme }) => theme.fontSize.regular};
  line-height: 1;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: calc(-${({ theme }) => theme.fontSize.regular} / 2);
  color: ${({ theme }) => theme.colors.silverChalice};
  text-align: right;
`;
