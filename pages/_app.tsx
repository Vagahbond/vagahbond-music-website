import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_EXTERNAL_HOST || 'http://localhost:3031';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
