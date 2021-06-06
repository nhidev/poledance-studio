import '../styles/globals.scss';
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
     <>
     <ThemeProvider theme={theme}>
       <GlobalStyle />
       <Header />
       <Component {...pageProps} />
       <Footer />
     </ThemeProvider>
   </>
  )
 }
export default appWithTranslation(MyApp)
