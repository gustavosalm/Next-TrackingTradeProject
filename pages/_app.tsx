import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider'
// import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  // const queryClient = new QueryClient();
  // <QueryClientProvider client={queryClient}>

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
