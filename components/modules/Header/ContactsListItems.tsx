import Link from 'next/link'

import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+380939339393'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +38 (093) 933 93 93
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='testmail:test@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/teest'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://facebook.com'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.facebook}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
