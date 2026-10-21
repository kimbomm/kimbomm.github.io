import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '@content/profile';
import './globals.css';

export const metadata: Metadata = {
  title: profile.siteTitle,
  description: profile.siteDescription,
  openGraph: {
    title: profile.siteTitle,
    description: profile.siteDescription,
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500;800;900&family=IBM+Plex+Sans+KR:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
