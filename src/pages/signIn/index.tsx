import { useTranslation } from 'react-i18next';
import './index.css'

function SingIn() {
  const { t } = useTranslation();
  return (
      <>
        <div className='sing-in-form m-auto'>
          <form className='flex flex-col justify-center'>
              <label className='text-14 font-lato'>
                {t('email')}
              </label>
              <input id="email" className='border h-30 rounded-lg' type="text"/>
              <label className='text-14 font-lato mt-16'>
                {t('password')}
              </label>
              <input id="password" className='border h-30 rounded-lg' type="password" />
              <input className="bg-scarpa text-white block mt-16 text-12 h-30 border rounded-xl" type="submit" />
          </form>
          <p className='text-scarpa font-lato underline text-center text-12'>
            {t('createAccountDisclaimer')}
          </p>
        </div>
      </>
  )
}

export default SingIn
