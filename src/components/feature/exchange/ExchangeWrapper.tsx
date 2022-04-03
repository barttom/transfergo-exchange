import React, { useState } from 'react';
import { Copy, ExchangeForm, RateWrapper, Wrapper } from './index';
import { ExchangeResponse } from '../../../utils/api';

export const ExchangeWrapper = () => {
  const [exchangeData, setExchangeData] = useState<ExchangeResponse | null>(null);

  return (
    <Wrapper>
      <ExchangeForm
        onReceiveData={(values) => {
          setExchangeData(values);
        }}
      />
      {exchangeData && (
        <>
          <RateWrapper>
            1 {exchangeData.from} = {exchangeData.rate} {exchangeData.to}
          </RateWrapper>
          <Copy>
            All figures are live mid-marke rates, which are for informational purposes only.
            <br />
            To see the rates for money transfer, please select sending money option.
          </Copy>
        </>
      )}
    </Wrapper>
  );
};
