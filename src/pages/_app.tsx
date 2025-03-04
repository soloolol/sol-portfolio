import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { useState } from 'react';
import ToastContainer from '@/components/toast/ToastContainer';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [initDark, setInitDark] = useState<boolean | undefined>(undefined);

  const handleDarkModeChange = (changeVal: boolean) => {
    localStorage.setItem('theme', changeVal ? 'dark' : 'light');
    if (changeVal) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setInitDark(changeVal);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Head>
          <title>Sol&apos;s Portfolio</title>
        </Head>
        <Layout initDark={initDark} onChangeDarkMode={handleDarkModeChange}>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
