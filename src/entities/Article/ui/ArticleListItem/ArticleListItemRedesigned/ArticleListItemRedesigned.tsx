import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo(
  ({
    className,
    article,
    view,
    target,
  }: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const userInfo = (
      <>
        <Avatar
          size={32}
          src={article?.user?.avatar}
          className={cls.avatar}
          alt={article?.user?.username || ''}
        />
        <UiText text={article.user?.username} bold />
      </>
    );

    const types = (
      <UiText
        text={article?.type.join(', ')}
        className={cls.types}
      />
    );
    const views = (
      <HStack gap='8'>
        <Icon Svg={EyeIcon} className={cls.viewsIcon} />
        <UiText text={article?.views} className={cls.views} />
      </HStack>
    );

    if (view === ArticleView.BLOCKS) {
      return (
        <AppLink
          data-testid='ArticleListItem'
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={cx(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card border='round' className={cls.card}>
            <AppImage
              fallback={<Skeleton width={'100%'} height={250} />}
              objectFit='cover'
              src={article?.img}
              className={cls.img}
              alt={article?.title}
            />
            <VStack gap='4' className={cls.info}>
              <UiText text={article?.title} />
              <VStack gap='4' max className={cls.footer}>
                <HStack justify='between' max>
                  <UiText text={article.createdAt} />
                  {views}
                </HStack>
                <HStack gap='4'>{userInfo}</HStack>
              </VStack>
            </VStack>
          </Card>
        </AppLink>
      );
    }

    const textBlock = article?.blocks.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        padding='24'
        max
        className={cx(cls.articleListItem, {}, [
          className,
          cls[view],
        ])}
        data-testid='ArticleListItem'
      >
        <VStack gap='16' max>
          <HStack gap='8' className={cls.header}>
            {userInfo}
            <UiText text={article.createdAt} />
          </HStack>
          <UiText title={article.title} bold />
          <UiText title={article.subtitle} size='small' />

          <AppImage
            fallback={<Skeleton width={'100%'} height={420} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
            width={'100%'}
            height={420}
          />
          {textBlock?.paragraphs && (
            <UiText
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack max justify='between'>
            <AppLink
              to={getRouteArticleDetails(article.id)}
              target={target}
            >
              <Button variant='outline'>{t('Read More')}</Button>
            </AppLink>
            {views}
          </HStack>
          {types}
        </VStack>
      </Card>
    );
  },
);
