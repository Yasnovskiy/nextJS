import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

export default function Contacts() {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <div className="wrapper">
      <Header />

      <h1>Contacts page</h1>
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

      <Link href="/">
        <a>To Index page</a>
      </Link>
      <br />
    </div>
  );
}
