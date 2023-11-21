import React, { memo } from 'react';

import { cx } from '@/shared/lib/classNames/cx';

import cls from './Icon.module.scss';

type BackgroundType = 'stroke' | 'fill';
type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface ImageIconProps extends IconBaseProps {
  clickable?: false;
}
interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = ImageIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={cx(cls.icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        style={{ width, height }}
        type='button'
        className={cls.button}
        onClick={props.onClick}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
