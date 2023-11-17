import { memo } from 'react';

import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(
  ({ className }: { className?: string }) => {
    return <Page data-testid='AdminPanelPage'>{'Admin'}</Page>;
  },
);

export default AdminPanelPage;
