import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { DropdownField } from '../../core/form';
import { currencyOptions } from '../../../constants/currencyOptions';
import { Button } from '../../button';
import { ExchangeIco, FieldCell, FieldsRow } from './Exchange.styled';
import { CurrencyField } from '../../core/form/currencyInput/CurrencyField';
import { usePrevious } from '../../../hooks/usePrevious';
import { requestExchange } from '../../../utils/api';

export type ExchangeFormValues = {
  exchangeFrom: string;
  exchangeTo: string;
  amountFrom: number;
  amountTo?: number;
};

export const ExchangeForm = () => {
  const formMethods = useForm<ExchangeFormValues>({
    defaultValues: {
      exchangeFrom: 'EUR',
      exchangeTo: 'GBP',
      amountFrom: 1,
      amountTo: undefined,
    },
  });
  const { handleSubmit, formState, watch, setValue } = formMethods;
  const currentValues = watch();
  const prevValues = usePrevious(currentValues as never);

  const submitForm = async ({ exchangeTo, exchangeFrom, amountFrom }: ExchangeFormValues) => {
    const data = await requestExchange({
      from: exchangeFrom as string,
      to: exchangeTo as string,
      amount: amountFrom.toString(),
    });

    if (data) {
      setValue('amountTo', Number(data.toAmount));
    }
  };

  console.log(prevValues);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldsRow>
          <FieldCell gap={60}>
            <DropdownField
              name="exchangeFrom"
              label="from"
              options={currencyOptions.filter(({ value }) => value !== currentValues.exchangeTo)}
              isDisabled={formState.isSubmitting}
            />
          </FieldCell>
          <ExchangeIco>
            <i className={`twa twa-${formState.isSubmitting ? '23f3' : '1f4b1'}`} />
          </ExchangeIco>
          <FieldCell gap={60}>
            <DropdownField
              name="exchangeTo"
              label="to"
              options={currencyOptions.filter(({ value }) => value !== currentValues.exchangeFrom)}
              isDisabled={formState.isSubmitting}
            />
          </FieldCell>
        </FieldsRow>
        <FieldsRow>
          <FieldCell gap={currentValues.amountTo ? 60 : undefined}>
            <CurrencyField
              name="amountFrom"
              label="amount"
              currency={currentValues.exchangeFrom}
              disabled={formState.isSubmitting}
            />
          </FieldCell>
          {currentValues.amountTo && (
            <FieldCell gap={60}>
              <CurrencyField
                name="amountTo"
                label="amount"
                currency={currentValues.exchangeTo}
                disabled={formState.isSubmitting}
              />
            </FieldCell>
          )}
        </FieldsRow>
        {!currentValues.amountTo && (
          <Button type="submit" disabled={formState.isSubmitting} fullWidth>
            Convert
          </Button>
        )}
      </form>
    </FormProvider>
  );
};
