import climLogo from '@/assets/climLogo.svg'
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavBar() {
  const { i18n } = useTranslation();
  const [ currentLanguage, setCurrentLanguage ] = useState('en');
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage)
  }

  return (
    <nav className='flex justify-between h-32 m-24'>
      <img 
        src={climLogo} 
        className="logo" 
        alt="Vite logo" />
      <div
        className='flex gap-2 items-center cursor-pointer'
        onClick={changeLanguage}
        >
        <p className='text-12'>{currentLanguage.toUpperCase()}</p>
        <img 
          className="icon" 
          src={'./public/translateIcon.svg'} 
          alt="translation icon" />
      </div>
    </nav>
  )
}

export default NavBar