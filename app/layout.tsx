import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

// Настройки глобального шрифта
const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Метаданные
export const metadata: Metadata = {
  title: 'Next Pizza',
  description: 'Учебный проект NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={nunito.className}>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
