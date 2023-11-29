import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIconDeprecated from '@/shared/assets/icons/eye-20-20.svg';
import { cx } from '@/shared/lib/classNames/cx';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ToggleFeatures,
  toggleFeatures,
} from '@/shared/lib/features';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/storeHooks/storeHooks';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  TextAlign,
  TextSize,
  TextTheme,
  UiText as UiTextDeprecated,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { UiText } from '@/shared/ui/redesigned/Text';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderBlock';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useAppSelector(getArticleDetailsData);
  return (
    <>
      <HStack justify='center' max>
        <AvatarDeprecated
          size={200}
          src={article?.img}
          alt='Article avatar'
          className={cls.avatar}
        />
      </HStack>
      <VStack gap='4' max data-testid='ArticleDetails.Info'>
        <UiTextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />

        <HStack gap='8'>
          <IconDeprecated Svg={EyeIconDeprecated} />
          <UiTextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap='8'>
          <IconDeprecated Svg={CalendarIcon} />
          <UiTextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useAppSelector(getArticleDetailsData);
  return (
    <>
      <UiText title={article?.title} size='large' bold />
      <UiText title={article?.subtitle} size='large' />

      <AppImage
        fallback={
          <SkeletonRedesigned
            width={'100%'}
            height={420}
            border='16'
          />
        }
        width={'100%'}
        src={article?.img}
        height={420}
      />

      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo(
  ({ className, id }: { className?: string; id?: string }) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const error = useAppSelector(getArticleDetailsError);

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (isLoading) {
      content = (
        <VStack gap='16' max>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            border='50%'
          />
          <Skeleton
            className={cls.title}
            width={300}
            height={32}
            border='10px'
          />
          <Skeleton
            className={cls.skeleton}
            width={600}
            height={24}
          />
          <Skeleton
            className={cls.skeleton}
            width={'100%'}
            height={200}
            border='10px'
          />
          <Skeleton
            className={cls.skeleton}
            width={'100%'}
            height={200}
            border='10px'
          />
        </VStack>
      );
    } else if (error) {
      content = (
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <UiText
              title={t('The error has occurred')}
              variant='error'
              align='center'
            />
          }
          off={
            <UiTextDeprecated
              title={t('The error has occurred')}
              theme={TextTheme.ERROR}
              align={TextAlign.CENTER}
            />
          }
        />
      );
    } else {
      content = (
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Redesigned />}
          off={<Deprecated />}
        />
      );
    }

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <VStack
          max
          gap='16'
          className={cx(cls.articleDetails, {}, [className])}
        >
          {content}
        </VStack>
      </DynamicModuleLoader>
    );
  },
);
