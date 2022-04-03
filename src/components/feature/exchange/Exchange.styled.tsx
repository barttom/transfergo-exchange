import styled from 'styled-components';

export const Wrapper = styled.section``;
export const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FieldCell = styled.div<{ gap?: number }>`
  flex-basis: ${({ gap }) => (gap ? `calc(50% - ${gap}px)` : '100%')};
`;

export const ExchangeIco = styled.span`
  font-size: 35px;
  margin-bottom: 25px;
`;

export const RateWrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 20px 0;

  &:before {
    content: '';
    display: inline-block;
    border: 5px solid ${({ theme }) => theme.colors.supernova};
    border-radius: 50%;
    width: 7px;
    height: 7px;
    margin-right: 10px;
  }
`;

export const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.silverChalice};
`;
