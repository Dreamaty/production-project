import { memo } from 'react';
import { useParams } from 'react-router';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleDetails } from '@/entities/Article';
import {
  ArticleRating,
  ArticleRecommendationsList,
  articleDetailsCommentsReducer,
} from '@/features/Article';
import { Page } from '@/widgets/Page';

import { articleDetailsRecommendationsReducer } from '../../model/slice/articleDetailsRecommendationsSlice';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { DetailsContainer } from '../DetailsContainer';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsRecommendations:
    articleDetailsRecommendationsReducer,
};

const ArticleDetailsPage = ({
  className,
}: {
  className?: string;
}) => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <StickyContentLayout
            content={
              <Page
                className={cx(cls.articleDetailsPage, {}, [
                  className,
                ])}
              >
                <VStack gap='16' max>
                  <DetailsContainer />
                  <ArticleRating articleId={id || ''} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments articleId={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page
            className={cx(cls.articleDetailsPage, {}, [
              className,
            ])}
          >
            <VStack gap='16' max>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ArticleRating articleId={id || ''} />
              <ArticleRecommendationsList />
              <ArticleDetailsComments articleId={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
