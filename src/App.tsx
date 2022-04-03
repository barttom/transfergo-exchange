import React from 'react';
import { Card, CenteredContainer } from './components/core/layout/Layout.styled';
import { CurrencyInput } from './components/core/form/currencyInput/CurrencyInput';
import { Dropdown } from './components/core/form/dropdown/Dropdown';
import { Button } from './components/button/Button';

export const App = () => (
  <CenteredContainer>
    <Card>
      <CurrencyInput currency="EUR" label="from" name="exchanggeFrom" />
      <Dropdown name="drop" label="choose" />
      <Button fullWidth>some text</Button>
    </Card>
  </CenteredContainer>
);
