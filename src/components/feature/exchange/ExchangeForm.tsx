import React, { useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { DropdownField } from '../../core/form';
import { currencyOptions } from '../../../constants/currencyOptions';
import { Button } from '../../core/button';
import { ExchangeIco, FieldCell, FieldsRow } from './Exchange.styled';
import { CurrencyField } from '../../core/form/currencyInput/CurrencyField';
import { usePrevious } from '../../../hooks/usePrevious';
import { ExchangeRequestParams, ExchangeResponse, requestExchange } from '../../../utils/api';

export type ExchangeFormValues = {
  exchangeFrom: string;
  exchangeTo: string;
  amountFrom: number;
  amountTo?: number;
};

export type ExchangeFormProps = {
  onReceiveData: (values: ExchangeResponse) => void;
};

export const ExchangeForm = ({ onReceiveData }: ExchangeFormProps) => {
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
  const prevValues = usePrevious(currentValues);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const flagUserChange = () => {
    setShouldRefetch(true);
  };
  const submitForm = async ({ exchangeTo, exchangeFrom, amountFrom }: ExchangeFormValues) => {
    try {
      const data = await requestExchange({
        from: exchangeFrom,
        to: exchangeTo,
        amount: amountFrom.toString(),
      });
      setShouldRefetch(false);

      if (data) {
        if (!Number.isNaN(Number(data.toAmount))) {
          setValue('amountTo', Number(data.toAmount));
        }
        onReceiveData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onChangeValues = useCallback(
    debounce(
      ({ from, to, amount }: ExchangeRequestParams, callback: (data: ExchangeResponse) => void) => {
        handleSubmit(async () => {
          try {
            const data = await requestExchange({
              from,
              to,
              amount,
            });
            setShouldRefetch(false);

            if (data) {
              callback(data);
            }
          } catch (e) {
            console.log(e);
          }
        })();
      },
      1000,
    ),
    [],
  );

  useEffect(() => {
    if (
      shouldRefetch &&
      currentValues.amountTo &&
      JSON.stringify(currentValues) !== JSON.stringify(prevValues)
    ) {
      if (currentValues.amountTo !== prevValues?.amountTo) {
        onChangeValues(
          {
            from: currentValues.exchangeTo,
            to: currentValues.exchangeFrom,
            amount: currentValues.amountTo.toString(),
          },
          (data) => {
            if (!Number.isNaN(Number(data.toAmount))) {
              setValue('amountFrom', Number(data.toAmount));
            }
          },
        );
      } else {
        onChangeValues(
          {
            from: currentValues.exchangeFrom,
            to: currentValues.exchangeTo,
            amount: currentValues.amountFrom.toString(),
          },
          (data) => {
            onReceiveData(data);
            if (!Number.isNaN(Number(data.toAmount))) {
              setValue('amountTo', Number(data.toAmount));
            }
          },
        );
      }
    }
  }, [currentValues]);

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
              onChangeCallback={flagUserChange}
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
              onChangeCallback={flagUserChange}
            />
          </FieldCell>
        </FieldsRow>
        <FieldsRow>
          <FieldCell gap={currentValues.amountTo ? 60 : undefined}>
            <CurrencyField
              name="amountFrom"
              label="amount"
              onKeyDown={flagUserChange}
              currency={currentValues.exchangeFrom}
              disabled={formState.isSubmitting}
            />
          </FieldCell>
          {currentValues.amountTo && (
            <FieldCell gap={60}>
              <CurrencyField
                name="amountTo"
                label="converted to"
                onKeyDown={flagUserChange}
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
