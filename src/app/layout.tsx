import type {Metadata} from 'next';
//import { Geist, Geist_Mono } from "next/font/google";
import './css/globals.css';
import {ThemeProvider} from 'next-themes';
import BasicLayout from '@/components/_libs/templates/BasicLayout';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';

dayjs.locale('ko');

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BasicLayout>{children}</BasicLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
