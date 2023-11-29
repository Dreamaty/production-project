import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { User } from '@/entities/User';

import cls from './ArticleAdditionalInfo.module.scss';

export const ArticleAdditionalInfo = memo(
  ({
    className,
    author,
    createdAt,
    views,
    onEdit,
    canEdit,
  }: {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    canEdit?: boolean;
    onEdit: () => void;
  }) => {
    const { t } = useTranslation('article');

    return (
      <VStack
        gap='32'
        className={cx(cls.articleAdditionalInfo, {}, [
          className,
        ])}
      >
        <HStack gap='8'>
          <Avatar src={author.avatar} size={32} alt={'avatar'} />
          <UiText text={author.username} bold />
          <UiText text={createdAt} />
        </HStack>
        {canEdit && (
          <Button variant='outline' onClick={onEdit}>
            {t('Edit')}
          </Button>
        )}
        <UiText text={t('{{count}} views', { count: views })} />
      </VStack>
    );
  },
);
