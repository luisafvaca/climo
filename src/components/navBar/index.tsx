import { useTranslation } from "react-i18next";
import { useState } from "react";
import ContactForm from "../contactForm";

import './index.css';

function NavBar() {
  const { i18n } = useTranslation();
  const [ currentLanguage, setCurrentLanguage ] = useState('en');
  const [ isVisibleContactForm, setIsVisibleContactForm ] = useState(true);
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage)
  }

  const toggleContactForm = () => {
    setIsVisibleContactForm(!isVisibleContactForm);
  }
  
  return (
    <>
      <nav className='flex justify-between h-32 m-24 gap-6'>
        <img 
          src={'./public/climLogo.svg'}
          className="logo"
          alt="Vite logo" />
        <div className='flex items-center cursor-pointer gap-6'>
          <div
            role="change-language"
            className='flex gap-2 items-center cursor-pointer'
            onClick={changeLanguage}
            >
            <p className='text-12'>{currentLanguage.toUpperCase()}</p>
            <img
              className="icon"
              src={'./public/translateIcon.svg'}
              alt="translation icon" />
          </div>
          <p className='text-14 ml-3' onClick={toggleContactForm}>Contacto</p>
        </div>
      </nav>
      <section
        className={
          `contact-form-overlay
          w-full
          h-full
          flex
          items-center
          justify-center +
          ${isVisibleContactForm ? "hidden" : "block"}`
        }>
        <img
          className="cursor-pointer top-20 right-6 absolute w-12 h-30 fill-white bg-white rounded-full"
          src={'./public/crossIcon.svg'}
          alt="close icon"
          onClick={toggleContactForm}/>
        <ContactForm/>
      </section>
    </>
  )
}

export default NavBar