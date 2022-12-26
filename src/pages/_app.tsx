import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import defaultTheme from '@/styles/theme';

import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
