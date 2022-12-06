import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const { locales = [] } = router;

  const { t } = useTranslation('common', { useSuspense: false });

  return (
    <header className="header">
      <div>Logo</div>
      <div>{t('h1')}</div>
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
