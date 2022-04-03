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
