import { memo } from 'react';

import { WebsiteLink } from '@/shared/ui/redesigned/WebsiteLink';

import GitHubLogo from '../assets/github-logo.png';

export const GithubLink = memo(
  ({ className }: { className?: string }) => {
    return (
      <WebsiteLink
        href='https://github.com/Dreamaty'
        src={GitHubLogo}
      />
    );
  },
);
