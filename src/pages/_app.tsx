import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  const handleDarkModeChange = (changeVal: boolean) => {
    localStorage.setItem('theme', changeVal ? 'dark' : 'light');
    if (changeVal) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('handleDarkModeChange:', changeVal);
    setIsDark(changeVal);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Sol&apos;s Portfolio</title>
      </Head>
      <Layout initDark={isDark} onChangeDarkMode={handleDarkModeChange}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
