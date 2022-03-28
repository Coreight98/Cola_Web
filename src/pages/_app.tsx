import '@styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Layout from '@components/Layout';
import { theme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
