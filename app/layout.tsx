import { Urbanist } from 'next/font/google';

import { Layout } from '@src/components/templates/layout';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={`${urbanist.variable} font-sans`}>
          <Layout>{children}</Layout>
        </main>
        <div id="portal" className={`${urbanist.variable} font-sans`} />
      </body>
    </html>
  );
}
