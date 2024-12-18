import '../styles/globals.css';
import Layout from '../components/Layout';
import { LanguageProvider } from '../contexts/LanguageContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <link 
          rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="/images/favicon-32x32.png"
        />
        <link 
          rel="icon" 
          type="image/png" 
          sizes="16x16" 
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;