'use client';
import { PasswordProvider } from '@/context/passwordContext';
import { IBM_Plex_Mono } from 'next/font/google';
const ibm = IBM_Plex_Mono({ weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' });

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ibm.className}>
        <PasswordProvider>{children}</PasswordProvider>
      </body>
    </html>
  );
}
