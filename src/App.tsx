import { useTranslation } from 'react-i18next';
import NavBar from './components/navBar';
import './App.css'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <NavBar />
      <h1 role="heading" className='font-openSans font-semibold text-center text-24 md:text-36 mt-xl'>{t('welcomeMessage')}</h1>
      <p className='font-lato text-center text-16 md:text-16 text-scarpa mb-lg'>{t('welcomeGoal')}</p>
    </>
  )
}

export default App
