import Layout from '@/layout/index';
import type { AppProps } from 'next/app';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
