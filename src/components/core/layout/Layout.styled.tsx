import styled from 'styled-components';

export const CenteredContainer = styled.section`
  width: 100%;
  
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 30px 16px;
  background: ${({ theme }) => theme.colors.white};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 68px;
    box-shadow: 0px 0px 24px -10px rgba(66, 68, 90, 1);
  }
`;
