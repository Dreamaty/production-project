import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack } from '../../../Stack/HStack/HStack';
import { Button, ButtonTheme } from '../Button';

export const EditButton = memo(
  ({
    className,
    readonly,
    onCancelEdit,
    onEdit,
    onSave,
  }: {
    className?: string;
    readonly: boolean;
    onEdit: () => void;
    onSave: () => void;
    onCancelEdit: () => void;
  }) => {
    const { t } = useTranslation();
    return (
      <HStack gap='8'>
        {readonly ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('Edit')}
          </Button>
        ) : (
          <>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
              {t('Save')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('Cancel')}
            </Button>
          </>
        )}
      </HStack>
    );
  },
);
