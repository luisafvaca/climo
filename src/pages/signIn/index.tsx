import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from '../../components/navBar';

import './index.scss'

function SingIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    localStorage.setItem('isAuthenticated', 'true')
  }

  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    password: ''
  })

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({
    email: '',
    password: ''
  });


  const validateTextFields = (field: string,value: string) => {
    if (value === '') {
      setFormErrors({
        ...formErrors,
        [field]: 'This field is required'
      })
      setIsFormValid(false)
    }
    if(value.length <= 3) {
      setFormErrors({
        ...formErrors,
        [field]: 'This field must have more than 3 characters'
      })
      setIsFormValid(false)
    }

    if( value.length > 3) { 
      setFormErrors({
        ...formErrors,
        [field]: ''
      })
    }
  }

  const validateEmail = (value: string) => {
    /* eslint-disable-next-line */
    const regularExpresionForEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(value === '') {
      setFormErrors({
        ...formErrors,
        email: 'This field is required'
      })
      setIsFormValid(false)
    }
    
    if(!value.match(regularExpresionForEmail)) {
      setFormErrors({
        ...formErrors,
        email: 'This field must have a valid email'
      })
      setIsFormValid(false)
    }

    if(value.match(regularExpresionForEmail) && value !== '') {
      setFormErrors({
        ...formErrors,
        email: ''
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.id === 'email') {
      validateEmail(e.target.value)
    }

    if(e.target.id === 'password') {
      validateTextFields(e.target.id, e.target.value);
    }
  }

  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (formData.email !== '' && formData.password !== '') {
      setIsFormValid(true)
    }
  }, [formData.email, formData.password])

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    navigate(isAuth ? '/dashboard' : '/')
  }, [navigate])
  
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
        className='flex flex-col justify-center relative'
        key={field.id}>
        <label
          className='text-14 font-lato'
          htmlFor={field.id}>
          {field.label}
        </label>
        <input
          role={field.id}
          id={field.id}
          className='border h-30 rounded-lg p-3 mb-10'
          type={field.type}
          onChange={handleChange}
          onBlur={handleBlur}/>
          <span className='text-rose-500 absolute bottom-[-5px]'>{formErrors[field.id]}</span>
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
              role='submit'
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
