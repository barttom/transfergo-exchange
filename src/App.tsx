import React from 'react';
import { Card, CenteredContainer } from './components/core/layout';
import { CurrencyInput, Dropdown } from './components/core/form';
import { Button } from './components/button';

export const App = () => (
  <CenteredContainer>
    <Card>
      <CurrencyInput currency="EUR" label="from" name="exchanggeFrom" />
      <Dropdown name="drop" label="choose" />
      <Button fullWidth>some text</Button>
    </Card>
  </CenteredContainer>
);
