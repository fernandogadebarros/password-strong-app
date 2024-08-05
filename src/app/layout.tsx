import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Password Strong',
  description: 'Challenge from Frontend Mentor | Password Strong project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
