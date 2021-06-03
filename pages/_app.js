import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
 }
export default appWithTranslation(MyApp)
