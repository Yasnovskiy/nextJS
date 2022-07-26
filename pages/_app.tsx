import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('app');
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
