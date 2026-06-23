import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import MainLayout from '../layouts/main';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigProvider>
  );
}
