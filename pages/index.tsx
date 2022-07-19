/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

export default function IndexPage() {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <>
      <Header />
      <div className="wrapper">
        <h1>Index page</h1>
        <p>
          Current locale:
          {' '}
          {locale}
        </p>
        <p>
          Default locale:
          {' '}
          {defaultLocale}
        </p>

        <Link href="/contacts">
          <a>To Contacts page</a>
        </Link>
        <br />
      </div>
    </>
  );
}
