import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../model/types/country';

const options = [
  { value: Country.Israel, content: Country.Israel },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
  ({
    className,
    value,
    onChange,
    readonly,
  }: {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
  }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );
    const props = {
      className,
      items: options,
      defaultValue: t('Choose a Country'),
      value,
      onChange: onChangeHandler,
      readonly: readonly,
      direction: 'top left' as const,
      label: t('Your Country'),
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
