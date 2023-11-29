import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack } from '../../../Stack/HStack/HStack';
import { Button } from '../Button';

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
          <Button onClick={onEdit}>{t('Edit')}</Button>
        ) : (
          <>
            <Button onClick={onSave}>{t('Save')}</Button>
            <Button onClick={onCancelEdit}>{t('Cancel')}</Button>
          </>
        )}
      </HStack>
    );
  },
);
