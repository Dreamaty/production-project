import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { cx } from '@/shared/lib/classNames/cx';

import { Page } from '@/widgets/Page';

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(
  ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('article');

    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);

    return (
      <Page className={cx('', {}, [className])}>
        {isEdit ? t('Article Edit') : t('Article Creation')}
      </Page>
    );
  },
);

export default ArticleEditPage;
