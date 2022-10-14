/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

export default function IndexPage() {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const { t } = useTranslation('index');

  console.log(process.env.TEST_ENV);

  return (
    <>
      <Header />
      <div className="wrapper">
        <h1>{t('h1')}</h1>
        <p>
          {t('currentLocale')}
          :
          {' '}
          {locale}
        </p>
        <p>
          {t('defaultLocale')}
          :
          {' '}
          {defaultLocale}
        </p>

        <Link href="/contacts">
          <a>{t('link')}</a>
        </Link>
        <br />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index'])),
  },
});
