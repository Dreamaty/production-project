import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid } from 'react-virtuoso';

import { cx } from '@/shared/lib/classNames/cx';
import { UiText } from '@/shared/ui/deprecated/Text';

// eslint-disable-next-line dreamatty-path-checker-plugin/layer-imports
import { PAGE_ID } from '@/widgets/Page';

import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.BLOCKS ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        key={index}
        view={view}
        className={cls.card}
      />
    ));

export const ArticleList = memo(
  ({
    className,
    articles,
    view = ArticleView.BLOCKS,
    isLoading,
    target,
    virtualized = false,
  }: {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
  }) => {
    const { t } = useTranslation('article');

    const isList = view === ArticleView.LIST;

    const itemsPerRow = isList ? 1 : 3;

    //// eslint-disable-next-line react-hooks/rules-of-hooks
    //const renderArticles = (article: Article) => (
    //	<ArticleListItem
    //		key={article.id}
    //		article={article}
    //		view={view}
    //		className={cls.card}
    //		target={target}
    //	/>
    //)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const renderArticlesVirtualized = (
      index: number,
      article: Article,
    ) => {
      return (
        <div key={index} className={cls.row}>
          <ArticleListItem
            article={article}
            view={view}
            target={target}
            key={article.id}
            className={cls.card}
          />
        </div>
      );
    };

    if (!isLoading && !articles?.length) {
      return (
        <div
          className={cx(cls.articleList, {}, [
            className,
            cls[view],
          ])}
        >
          <UiText title={t('Articles doesnt found')} />
        </div>
      );
    }

    return (
      <div
        className={cx('', {}, [cls[view]])}
        data-testid='ArticleList'
      >
        {virtualized ? (
          <VirtuosoGrid
            style={{ height: '100%' }}
            totalCount={articles?.length || 0}
            data={articles}
            customScrollParent={
              document.getElementById(PAGE_ID) as HTMLElement
            }
            itemContent={renderArticlesVirtualized}
          ></VirtuosoGrid>
        ) : (
          articles?.map(item => (
            <ArticleListItem
              className={cls.card}
              target={target}
              article={item}
              key={item.id}
              view={view}
            />
          ))
        )}
      </div>

      // TODO: List virtualization with virtuoza

      //<div style={{ display: 'flex', flexGrow: 1, height: '100%', width: '100%' }}>
      //	<AutoSizer>
      //		{({ width, height }: {
      //		width: number, height: number
      //	}) => (

      //			//<div
      //			//	className={cx(cls.articleList, {},
      //			//		[className, cls[view]])}
      //			//>

      //			<FixedSizeList
      //				height={height ?? 700}
      //				width={width ? width - 80 : 700}
      //				itemCount={rowCount}
      //				itemSize={700}

      //			>
      //				{renderArticlesVirtualized}
      //			</FixedSizeList>
      //			//{isLoading && getSkeletons(view)}
      //			//</AutoSizer></div>
      //		)}
      //	</AutoSizer>
      //</div>
      //)}
    );
  },
);
