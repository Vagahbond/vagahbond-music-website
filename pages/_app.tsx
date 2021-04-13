import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/style.css'

import axios from 'axios';

axios.defaults.baseURL = 'api:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
