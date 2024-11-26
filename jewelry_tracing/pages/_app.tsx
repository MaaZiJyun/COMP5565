import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '../config/web3';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </WagmiConfig>
  );
}

export default MyApp; 