import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from '@/shared/lib/classNames/cx';
import {
  TextAlign,
  TextSize,
  UiText,
} from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

export const CommentList = memo(
  ({
    className,
    comments,
    isLoading,
  }: {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
  }) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack gap='16' max className={cx('', {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }

    return (
      <VStack gap='16' max className={cx('', {}, [className])}>
        {comments?.length ? (
          comments.map(comment => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <UiText
            align={TextAlign.CENTER}
            size={TextSize.L}
            text={t('There is no comments')}
          />
        )}
      </VStack>
    );
  },
);
