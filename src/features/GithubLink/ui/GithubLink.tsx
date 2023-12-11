import { memo } from 'react';

import { WebsiteLink } from '@/shared/ui/redesigned/WebsiteLink';

import GitHubLogo from '../assets/github-logo.png';

export const GithubLink = memo(
  ({
    className,
    href,
  }: {
    className?: string;
    href?: string;
  }) => {
    return (
      <WebsiteLink
        href={
          `https:/github.com/${href}` ||
          'https:/github.com/Dreamaty'
        }
        src={GitHubLogo}
      />
    );
  },
);
