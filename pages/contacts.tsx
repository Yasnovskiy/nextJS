import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header/Header';

interface ContactsPage {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ContactsProps {
  data: ContactsPage[],
}

export default function Contacts({ data }: ContactsProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const contacts = data.slice(0, 10);

  const { t } = useTranslation('common');

  return (
    <div className="wrapper">
      <Header />

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

      <Link href="/">
        <a>{t('link')}</a>
      </Link>
      <br />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const { data } = await axios.get<ContactsPage[]>('https://jsonplaceholder.typicode.com/posts');

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  };
};
