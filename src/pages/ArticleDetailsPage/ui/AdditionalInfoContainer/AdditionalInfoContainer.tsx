import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';

import { getRouteArticleEdit } from '@/shared/const/router';
import { cx } from '@/shared/lib/classNames/cx';
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Card } from '@/shared/ui/redesigned/Card';

import { getArticleDetailsData } from '@/entities/Article';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import { getCanEditArticle } from '../../model/selectors/article';
import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = memo(
  ({ className }: { className?: string }) => {
    const article = useAppSelector(getArticleDetailsData);
    const canEdit = useAppSelector(getCanEditArticle);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(article?.id || ''));
    }, [article, navigate]);

    if (!article) return null;

    return (
      <Card
        className={cx(cls.card, {}, [className])}
        padding='24'
        border='round'
      >
        <ArticleAdditionalInfo
          author={article.user}
          createdAt={article.createdAt}
          views={article.views}
          canEdit={canEdit}
          onEdit={onEditArticle}
        />
      </Card>
    );
  },
);
