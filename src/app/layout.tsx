import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gutter Installation & Repair Options | Gutter Service Connect',
  description:
    'Learn about gutter installation, replacement, and repair options. Review cost factors, material types, project questions, and provider availability.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
