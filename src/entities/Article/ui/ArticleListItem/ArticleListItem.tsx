import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import {
  Button,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { UiText } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { VStack } from '@/shared/ui/redesigned/Stack';

import {
  ArticleBlockType,
  ArticleView,
} from '../../model/consts/consts';
import {
  Article,
  ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

export const ArticleListItem = memo(
  ({
    className,
    article,
    view,
    target,
  }: {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
  }) => {
    const { t } = useTranslation('article');

    const types = (
      <UiText
        text={article?.type.join(', ')}
        className={cls.types}
      />
    );
    const views = (
      <div className={cls.viewsWrapper}>
        <UiText text={article?.views} className={cls.views} />
        <Icon Svg={EyeIcon} className={cls.viewsIcon} />
      </div>
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
          <Card>
            <VStack gap='8'>
              <div className={cls.imageWrapper}>
                <AppImage
                  fallback={
                    <Skeleton width={200} height={200} />
                  }
                  src={article?.img}
                  className={cls.img}
                  alt={article?.title}
                />

                <UiText
                  text={article?.createdAt}
                  className={cls.date}
                />
              </div>
              <div className={cls.infoWrapper}>
                {types}
                {views}
              </div>
              <UiText
                text={article?.title}
                className={cls.title}
              />
            </VStack>
          </Card>
        </AppLink>
      );
    }

    const textBlock = article?.blocks.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={cx(cls.articleListItem, {}, [
          className,
          cls[view],
        ])}
        data-testid='ArticleListItem'
      >
        <Card>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article?.user?.avatar}
              alt={article?.user?.username || ''}
            />
            <UiText
              text={article.user?.username}
              className={cls.username}
            />
            <UiText
              text={article.createdAt}
              className={cls.date}
            />
          </div>

          <UiText title={article.title} className={cls.title} />

          {types}

          <AppImage
            fallback={<Skeleton width={'100%'} height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />

          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={getRouteArticleDetails(article.id)}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Read More')}
              </Button>
            </AppLink>
            {view}
          </div>
        </Card>
      </div>
    );
  },
);
