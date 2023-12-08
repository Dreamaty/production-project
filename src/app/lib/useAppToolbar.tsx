import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
  const appRoute = useRouteChange();

  const toolbarByAppRouter: OptionalRecord<
    AppRoutes,
    ReactElement
  > = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolbarByAppRouter[appRoute];
}
