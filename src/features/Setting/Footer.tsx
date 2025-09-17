'use client';

import { PropsWithChildren, memo } from 'react';

const Footer = memo<PropsWithChildren>(() => {
  // GitHub footer hidden as requested
  return null;
});

Footer.displayName = 'SettingFooter';

export default Footer;