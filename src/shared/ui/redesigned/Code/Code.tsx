import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { cx } from '@/shared/lib/classNames/cx';

import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

export const Code = memo(
  ({
    className,
    text,
  }: {
    className?: string;
    text: string;
  }) => {
    const onCopy = useCallback(() => {
      navigator.clipboard.writeText(text);
    }, [text]);

    return (
      <pre className={cx(cls.code, {}, [className])}>
        <Icon
          Svg={CopyIcon}
          className={cls.copyBtn}
          clickable
          onClick={onCopy}
        />

        <code>{text}</code>
      </pre>
    );
  },
);
