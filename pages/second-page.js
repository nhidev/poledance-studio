import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const SecondPage = () => {

  const router = useRouter()
  const { t } = useTranslation('second-page')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['second-page', 'footer']),
  },
})

export default SecondPage
