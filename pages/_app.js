import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../utils/theme'
import createEmotionCache from '../utils/createEmotionCache'
import { UserProvider } from '../context/user'
import AuthStateChangeProvider from '../context/auth'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Netflix - MUI</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <AuthStateChangeProvider>
            <Component {...pageProps} />
          </AuthStateChangeProvider>
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

