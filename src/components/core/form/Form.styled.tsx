import styled from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  bottom: 0;
  left: 0;
  height: 56px;
`;

export const FieldLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.silverChalice};
  padding-bottom: 10px;
  text-transform: uppercase;

  &:after {
    content: ':';
    display: inline-block;
  }
`;
