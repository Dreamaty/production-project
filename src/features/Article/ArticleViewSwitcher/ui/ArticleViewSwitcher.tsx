import { memo } from 'react';

import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import TileIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { cx } from '@/shared/lib/classNames/cx';
import { ToggleFeatures } from '@/shared/lib/features';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { ArticleView } from '@/entities/Article';

import {
  default as cls,
  default as newCls,
} from './ArticleViewSwitcher.module.scss';

const viewTypes = [
  {
    view: ArticleView.BLOCKS,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TileIcon,
      off: () => TileIconDeprecated,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSwitcher = memo(
  ({
    className,
    onViewClick,
    view,
  }: {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
  }) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card
            className={cx(newCls.articleViewSwitcher, {}, [
              className,
            ])}
          >
            <HStack gap='8' align='center'>
              {viewTypes.map(viewType => (
                <Icon
                  key={viewType.view}
                  clickable
                  onClick={onClick(viewType.view)}
                  width={24}
                  height={24}
                  Svg={viewType.icon}
                  className={cx('', {
                    [newCls.notSelected]: viewType.view !== view,
                  })}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div
            className={cx(cls.articleViewSwitcher, {}, [
              className,
            ])}
          >
            {viewTypes.map(viewType => (
              <ButtonDeprecated
                theme={ButtonTheme.CLEAR}
                key={viewType.view}
                onClick={onClick(viewType.view)}
                className={cx('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              >
                <IconDeprecated
                  width={24}
                  height={24}
                  Svg={viewType.icon}
                />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);
