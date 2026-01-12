'use client'

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '../../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('components');

  const languages = [
    { code: 'en', name: t('localeSwitcher.english') },
    { code: 'de', name: t('localeSwitcher.german') },
    { code: 'es', name: t('localeSwitcher.spanish') },
  ];

  return (
    <div className='language-switcher'>
      {languages.map(({code, name}) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={`language-switcher__link ${locale === code ? 'language-switcher__link--active' : ''}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
