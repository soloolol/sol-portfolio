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

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Head>
          <title>Sol&apos;s Portfolio</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
