import { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import { cx } from '@/shared/lib/classNames/cx';
import {
  ToggleFeatures,
  toggleFeatures,
} from '@/shared/lib/features';

import { Icon } from '../../redesigned/Icon';
import {
  BackgroundColor,
  BackgroundType,
  Icon as IconDeprecated,
} from '../Icon/Icon';
import cls from './StarRating.module.scss';

const stars = [1, 2, 3, 4, 5];

/**
 *  @deprecated
 */
export const StarRating = memo(
  ({
    className,
    onSelect,
    selectedStars = 0,
    size = 30,
  }: {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
  }) => {
    const [currentStarCount, setCurrentStarsCount] =
      useState<number>(selectedStars);
    const [isSelected, setIsSelected] = useState(
      Boolean(selectedStars),
    );

    const isStarSelected = (starsNumber: number) => {
      if (starsNumber <= currentStarCount) return true;
      if (starsNumber <= selectedStars) {
        return true;
      }
    };

    const onHover = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount);
      }
    };
    const onLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0);
      }
    };

    const onClick = (starsCount: number) => () => {
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
      onSelect?.(starsCount);
    };

    const defaultCls = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => cls.starRating,
      on: () => cls.starRatingRedesigned,
    });

    return (
      <div className={cx(defaultCls, {}, [className])}>
        {stars.map(starNumber => {
          const commonProps = {
            onMouseEnter: onHover(starNumber),
            onMouseLeave: onLeave,
            onClick: onClick(starNumber),
            width: size,
            height: size,
            Svg: StarIcon,
            key: starNumber,
            className: cx('', {}, []),
            'data-testid': `StarRating.${starNumber}`,
            'data-selected': currentStarCount >= starNumber,
          };
          return (
            <ToggleFeatures
              key={starNumber}
              feature={'isAppRedesigned'}
              on={
                <Icon
                  {...commonProps}
                  clickable={!isSelected}
                  fill={isStarSelected(starNumber)}
                />
              }
              off={
                <IconDeprecated
                  {...commonProps}
                  backgroundType={
                    isStarSelected(starNumber)
                      ? BackgroundType.FILL
                      : BackgroundType.STROKE
                  }
                  backgroundColor={BackgroundColor.PRIMARY_COLOR}
                  pointer={!isSelected}
                />
              }
            />
          );
        })}
      </div>
    );
  },
);
