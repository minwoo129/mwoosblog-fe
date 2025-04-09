import type {Metadata} from 'next';
//import { Geist, Geist_Mono } from "next/font/google";
import './css/globals.css';
import {ThemeProvider} from 'next-themes';
import BasicLayout from '@/components/templates/BasicLayout';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import {AntdRegistry} from '@ant-design/nextjs-registry';

dayjs.locale('ko');

export const metadata: Metadata = {
  title: {
    template: "%s | MWoo's Blog",
    default: "MWoo's Blog",
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProvider>
            <BasicLayout>{children}</BasicLayout>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
