/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';

export default function IndexPage() {
  const router = useRouter();

  const { locale, defaultLocale } = router;
  const { t } = useTranslation();

  const [langs, setLang] = useState<any[]>([]);
  const [nameField, setNameField] = useState<any[]>([]);

  console.log('process.env.SERVER ===', process.env.SERVER);

  console.log('process.env.SERVER_DEV ===', process.env.SERVER_DEV);

  console.log('process.env.i18 ===', process.env.I18NEXUS_API_KEY);

  const dfsdfas: any = t('default:bad', { returnObjects: true });

  useEffect(() => {
    fetch('https://api.i18nexus.com/project_resources/languages.json?api_key=1_MWX5IYYeyHPiOj26kfSA')
      .then((response) => response.json())
      .then((data) => {
        setLang(data.collection);
        return console.log(data.collection);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.i18nexus.com/project_resources/namespaces.json?api_key=1_MWX5IYYeyHPiOj26kfSA')
      .then((response) => response.json())
      .then((data) => {
        setNameField(data.collection);
        return console.log(data.collection);
      });
  }, []);

  console.log(process.env.TEST_ENV);

  return (
    <>

      {process.env.TEST_ENV === 'ANDREY_AND_MAX' ? <div>используется env</div> : <div>почему не работате?</div>}

      <Header />
      <div className="wrapper">
        <h2>{dfsdfas.title}</h2>
        <h2>
          {t('testFolder:testName')}
        </h2>

        <h2>
          Test rebuild:
          {' '}
          {t('testFolder:testBuild')}
        </h2>
        <p>
          :
          {' '}
          {locale}
        </p>
        <p>
          {t('index:defaultLocale')}
          :
          {' '}
          {defaultLocale}
        </p>

        {
          langs.map((el) => (<div key={el.full_code}>{el.full_code}</div>))
        }

        <Link href="/contacts">
          <a>{t('index:link')}</a>
        </Link>

        <p>{t('test:andrey')}</p>
        <br />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const { data: products } = await axios.get<any>('https://api.i18nexus.com/project_resources/namespaces.json?api_key=1_MWX5IYYeyHPiOj26kfSA');

  const arr = products.collection.map((el: any) => el.title);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'test', ...arr])),
    },
  };
};
