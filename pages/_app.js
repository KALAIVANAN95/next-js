import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { Container } from '@mui/system'
import Head from 'next/head'
import NProgress from 'nprogress'

export default function App({ Component, pageProps }) {
  return<>
  <Layout>
    <Head>
     </Head>
   
    <Container maxWidth='md'> <Component {...pageProps} /></Container></Layout>
    </>
}
