import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const { locales = [], locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <header className="header">
      <div>Logo</div>
      <div>Menu</div>
      <div>
        <ul>
          {locales.map((locale) => {
            const { pathname, query, asPath } = router;

            return (
              <li key={locale}>
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
