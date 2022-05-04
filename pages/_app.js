import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="public/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="public/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="public/static/favicons/safari-pinned-tab.svg" color="#3c787b" />
        <link rel="shortcut icon" href="public/static/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="tibo.gabriels.dev" />
        <meta name="application-name" content="tibo.gabriels.dev" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="public/static/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#3c787b" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
