export type ExchangeRequestParams = {
  from: string;
  to: string;
  amount: string;
};
export type ExchangeResponse = {
  from: string;
  fromAmount: number;
  rate: number;
  to: string;
  toAmount: number;
};

export const requestExchange = async ({
  from,
  to,
  amount,
}: ExchangeRequestParams): Promise<ExchangeResponse | null> => {
  try {
    const params = new URLSearchParams({
      from,
      to,
      amount,
    });

    return await fetch(`https://my.transfergo.com/api/fx-rates?${params}`)
      .then((res) => res.json())
      .catch(() => {
        return null;
      });
  } catch (e) {
    return null;
  }
};
