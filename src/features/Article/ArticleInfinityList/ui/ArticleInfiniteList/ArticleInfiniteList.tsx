import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/storeHooks/storeHooks';
import { UiText as UiTextDeprecated } from '@/shared/ui/deprecated/Text';
import { UiText } from '@/shared/ui/redesigned/Text';

import { ArticleList } from '@/entities/Article';

import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articles';
import { getArticles } from '../../model/slice/articleInfinityListSlice';

export const ArticleInfiniteList = memo(
  ({ className }: { className?: string }) => {
    const { t } = useTranslation('article');

    const articles = useAppSelector(getArticles.selectAll);
    const articlesView = useAppSelector(getArticlesView);
    const isArticlesLoading = useAppSelector(
      getArticlesIsLoading,
    );
    const error = useAppSelector(getArticlesError);

    if (error) {
      return (
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <UiText
              text={t(
                'An error ocured after tring to load articles',
              )}
            />
          }
          off={
            <UiTextDeprecated
              text={t(
                'An error ocured after tring to load articles',
              )}
            />
          }
        />
      );
    }

    return (
      <ArticleList
        articles={articles}
        view={articlesView}
        isLoading={isArticlesLoading}
        className={className}
      />
    );
  },
);
