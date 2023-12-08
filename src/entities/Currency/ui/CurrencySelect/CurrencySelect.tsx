import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';

import { Currency } from '../../model/types/currency';

const options = [
  { value: Currency.ILS, content: Currency.ILS },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = memo(
  ({
    className,
    value,
    onChange,
    readonly,
  }: {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
  }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const props = {
      className,
      items: options,
      defaultValue: t('Choose Currency'),
      value,
      onChange: onChangeHandler,
      readonly: readonly,
      direction: 'top right' as const,
      label: t('Your Currency'),
    };

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<Listbox {...props} direction='bottom-start' />}
        off={<ListboxDeprecated {...props} />}
      />
    );
  },
);
