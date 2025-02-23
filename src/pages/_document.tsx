import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
            const theme = localStorage.getItem('theme');
            if (!theme || theme === 'dark') {
              console.log('#theme-init:', theme)
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            } else {
              console.log('#theme-init:', theme)
              document.documentElement.classList.remove('dark');
            }})();
          `}
        </Script>
      </Head>
      <body className="antialiased dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
