import React from 'react';
import { Card, CenteredContainer } from './components/core/layout';
import { ExchangeWrapper } from './components/feature/exchange';

export const App = () => (
  <CenteredContainer>
    <Card>
      <ExchangeWrapper />
    </Card>
  </CenteredContainer>
);
