import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalState from '../context/globalState';

function MyApp({ Component, pageProps }: AppProps) {
  return <GlobalState><Component {...pageProps} /></GlobalState>
}

export default MyApp
