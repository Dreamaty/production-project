import { HTMLAttributeAnchorTarget, memo } from 'react';

import { AppImage } from '../../AppImage';
import { Button } from '../../Button';

export const WebsiteLink = memo(
  ({
    className,
    src,
    target = '_blank',
    href,
    width,
    height = 50,
  }: {
    className?: string;
    src?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    href: string;
    height?: string | number;
    width?: string | number;
  }) => {
    const styles = {
      width,
      height,
    };
    return (
      <Button
        variant='filled'
        color='accent'
        className={className}
        style={styles}
      >
        <a href={href} target={target} rel='noreferrer'>
          <AppImage
            src={src}
            alt='logo'
            width={70}
            height={50}
            objectFit='contain'
          />
        </a>
      </Button>
    );
  },
);
