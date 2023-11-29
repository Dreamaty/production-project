import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '@/shared/ui/redesigned/Card';

import { ArticleDetails } from '@/entities/Article';

export const DetailsContainer = memo(
  ({ className }: { className?: string }) => {
    const { id } = useParams<{ id: string }>();

    return (
      <Card className={className} padding='24'>
        <ArticleDetails id={id} />
      </Card>
    );
  },
);
