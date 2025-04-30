import '@/app/globals.css';
import { ReactNode } from 'react';
import Layout from '@/components/layout/Layout';
import ToastContainer from '@/components/toast/ToastContainer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                const theme = localStorage.getItem('theme');
                if (!theme || theme === 'light') {
                  localStorage.setItem('theme', 'light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            })();`,
          }}
        />
      </head>
      <body className="antialiased dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300">
        <Layout>{children}</Layout>
        <ToastContainer />
      </body>
    </html>
  );
}
