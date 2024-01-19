import { memo } from 'react';

import { WebsiteLink } from '@/shared/ui/redesigned/WebsiteLink';

import LinkedInLogo from '../assets/Linkedin-logo-transparent-Black.png';

export const LinkedinLink = memo(
  ({ className }: { className?: string }) => {
    return (
      <WebsiteLink
        href='https://www.linkedin.com/in/michael-nakhimson/'
        src={LinkedInLogo}
        className={className}
      />
    );
  },
);
