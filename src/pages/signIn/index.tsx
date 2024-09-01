import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from '../../components/navBar';

import './index.scss'

function SingIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard', { replace: true });
  }
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIsFormValid(false)
    }
  }

  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (formData.email !== '' && formData.password !== '') {
      setIsFormValid(true)
    }
  }, [formData.email, formData.password])
  
  const fieldsData = [
    {
      type: 'text',
      id: 'email',
      label: t('email')
    },
    {
      type: 'password',
      id: 'password',
      label: t('password')
    }
  ]

  const fields = fieldsData.map((field) => {
    return (
      <div 
        className='flex flex-col justify-center'
        key={field.id}>
        <label
          className='text-14 font-lato'
          htmlFor={field.id}>
          {field.label}
        </label>
        <input
          id={field.id}
          className='border h-30 rounded-lg p-3'
          type={field.type}
          onChange={handleChange}
          onBlur={handleBlur}/>
      </div>
    )
  })
  return (
      <>
        <NavBar />
        <h1 className='font-openSans font-semibold text-center text-24 md:text-36 mt-xl'>{t('welcomeMessage')}</h1>
        <p className='font-lato text-center text-16 md:text-16 text-scarpa mb-lg'>{t('welcomeGoal')}</p>
        <div className='sing-in-form m-auto'>
          <form className='flex flex-col justify-center  gap-4'>
            {fields}  
            <input
              className={`bg-scarpa text-white block mt-16 text-12 h-30 border rounded-xl ${!isFormValid ? "pointer-events-none field-disabled" : "pointer-events-auto"}`}
              type="submit"
              value={t('signIn')}
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
