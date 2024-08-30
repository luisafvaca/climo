import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import NavBar from '../../components/navBar';

import './index.css'

function SingIn() {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard', { replace: true });
  }
  return (
      <>
        <NavBar />
        <h1 className='font-openSans font-semibold text-center text-24 md:text-36 mt-xl'>{t('welcomeMessage')}</h1>
        <p className='font-lato text-center text-16 md:text-16 text-scarpa mb-lg'>{t('welcomeGoal')}</p>
        <div className='sing-in-form m-auto'>
          <form className='flex flex-col justify-center'>
              <label className='text-14 font-lato'>
                {t('email')}
              </label>
              <input
                id="email"
                className='border h-30 rounded-lg p-3'
                type="text"/>
              <label className='text-14 font-lato mt-16'>
                {t('password')}
              </label>
              <input
                id="password"
                className='border h-30 rounded-lg p-3'
                type="password" />
              <input
                className="bg-scarpa text-white block mt-16 text-12 h-30 border rounded-xl"
                type="submit"
                onClick={handleNavigateToDashboard}/>
          </form>
          <p className='text-scarpa font-lato underline text-center text-12'>
            {t('createAccountDisclaimer')}
          </p>
        </div>
      </>
  )
}

export default SingIn
