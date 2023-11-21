import { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import { cx } from '@/shared/lib/classNames/cx';

import {
  BackgroundColor,
  BackgroundType,
  Icon,
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

    return (
      <div className={cx(cls.starRating, {}, [className])}>
        {stars.map(starNumber => (
          <Icon
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            onClick={onClick(starNumber)}
            width={size}
            height={size}
            Svg={StarIcon}
            key={starNumber}
            backgroundType={
              isStarSelected(starNumber)
                ? BackgroundType.FILL
                : BackgroundType.STROKE
            }
            backgroundColor={BackgroundColor.PRIMARY_COLOR}
            className={cx('', {}, [])}
            pointer={!isSelected}
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarCount >= starNumber}
          />
        ))}
      </div>
    );
  },
);