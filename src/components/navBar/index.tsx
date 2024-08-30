import climLogo from '@/assets/climLogo.svg'
import { useTranslation } from "react-i18next";
import { useState } from "react";
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
      <nav className='flex justify-between h-32 m-24'>
        <img 
          src={climLogo}
          className="logo"
          alt="Vite logo" />
        <div className='flex items-center cursor-pointer'>
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
          <h1 className='text-14 ml-3' onClick={toggleContactForm}>Contacto</h1>
        </div>
      </nav>
      <section className={`contact-form-overlay w-full h-full flex items-center justify-center + ${isVisibleContactForm ? "hidden" : "block"}`}>
          <div className="bg-white">
            I will the form
            <form>
              <label htmlFor='name'>Nombre</label>
              <input type='text' id='name' />
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
              <label htmlFor='dateBird'>Fecha de nacimiento</label>
              <input type='date' id='dateBird' />
              <label htmlFor='city'>Ciudad</label>
              <input type='text' id='city' />
              <label htmlFor='telefono'>Mensaje</label>
              <input type='number' id='mensaje' />
              <button>Enviar</button>
            </form>
          </div>

      </section>
    </>
  )
}

export default NavBar