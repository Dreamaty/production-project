import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

import { Button as ButtonDeprecated } from '../../../shared/ui/deprecated/Button';
import { ButtonTheme } from '../../../shared/ui/deprecated/Button/ui/Button';

export const LangSwitcher = memo(
  ({
    className,
    short,
  }: {
    className?: string;
    short?: boolean;
  }) => {
    const { t, i18n } = useTranslation();

    return (
      <ToggleFeatures
        feature={'isArticleRatingEnabled'}
        on={
          <Button
            variant='clear'
            className={cx('', {}, [className])}
            onClick={() => {
              i18n.changeLanguage(
                i18n.language === 'en' ? 'ru' : 'en',
              );
            }}
          >
            {t(short ? 'Lang' : 'Language')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={cx('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={() => {
              i18n.changeLanguage(
                i18n.language === 'en' ? 'ru' : 'en',
              );
            }}
          >
            {t(short ? 'Lang' : 'Language')}
          </ButtonDeprecated>
        }
      />
    );
  },
);
