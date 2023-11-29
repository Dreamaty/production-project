import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import {
  ToggleFeatures,
  toggleFeatures,
} from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { UiText as UiTextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

export const CommentCard = memo(
  ({
    className,
    comment,
    isLoading,
  }: {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
  }) => {
    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });
    if (isLoading) {
      return (
        <VStack
          gap='8'
          max
          className={cx(cls.commentCard, {}, [
            className,
            cls.loading,
          ])}
          data-testid='CommentCard.Loading'
        >
          <HStack gap='8' max>
            <Skeleton border='100%' height={30} width={30} />
            <Skeleton border='10px' height={20} width={100} />
          </HStack>
          <Skeleton
            className={cls.text}
            border='10px'
            height={20}
            width={'100%'}
          />
          <Skeleton
            className={cls.text}
            border='10px'
            height={20}
            width={'100%'}
          />
        </VStack>
      );
    }

    if (!comment) return null;

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card padding='24' border='round' max>
            <VStack
              gap='8'
              max
              className={cx(cls.commentCardRedesigned, {}, [
                className,
              ])}
              data-testid='CommentCard.Content'
            >
              <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap='8' max>
                  {comment?.user.avatar && (
                    <Avatar
                      size={30}
                      alt={comment.user.username}
                      src={comment.user?.avatar}
                    />
                  )}
                  <UiText text={comment?.user.username} bold />
                </HStack>
              </AppLink>
              <UiText
                className={cls.text}
                text={comment?.text}
              />
            </VStack>
          </Card>
        }
        off={
          <VStack
            gap='8'
            max
            className={cx(cls.commentCard, {}, [className])}
            data-testid='CommentCard.Content'
          >
            <AppLinkDeprecated
              to={getRouteProfile(comment.user.id)}
            >
              <HStack gap='8' max>
                {comment?.user.avatar && (
                  <AvatarDeprecated
                    size={30}
                    alt={comment.user.username}
                    src={comment.user?.avatar}
                  />
                )}
                <UiTextDeprecated
                  title={comment?.user.username}
                />
              </HStack>
            </AppLinkDeprecated>
            <UiTextDeprecated
              className={cls.text}
              text={comment?.text}
            />
          </VStack>
        }
      />
    );
  },
);
