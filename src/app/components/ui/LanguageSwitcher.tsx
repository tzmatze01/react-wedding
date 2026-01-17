'use client'

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('components');

  console.log()
  const languages = [
    { code: 'en', name: t('localeSwitcher.english') },
    { code: 'de', name: t('localeSwitcher.german') },
    { code: 'es', name: t('localeSwitcher.spanish') },
  ];

  return (
    <div className='languageSwitcher'>
      {languages.map(({code, name}) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={`languageSwitcher__link ${locale === code ? 'languageSwitcher__link--active' : ''}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
