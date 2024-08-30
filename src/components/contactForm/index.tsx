import  { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function ContactForm () {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    dateBird: '',
    city: '',
    phoneNumber: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    dateBird: '',
    city: '',
    phoneNumber: ''
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

  const validateDateField = (value: string) => {
  
    if(value === '') {
      setFormErrors({
        ...formErrors,
        dateBird: 'This field must have a valid date'
      })

      setIsFormValid(false)
    }

    if(value !== '') {
      setFormErrors({
        ...formErrors,
        dateBird: ''
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

  const validatePhoneNumber = (value: string) => {
    const regularExpresionForPhoneNumber = /^\d{10}$/;

    if(value === '') {
      setFormErrors({
        ...formErrors,
        phoneNumber: 'This field is required'
      })
      setIsFormValid(false)
    }

    if(!value.match(regularExpresionForPhoneNumber)) {
      setFormErrors({
        ...formErrors,
        phoneNumber: 'This field must have a valid phone number'
      })
      setIsFormValid(false)
    }

    if(value.match(regularExpresionForPhoneNumber) && value !== '') {
      setFormErrors({
        ...formErrors,
        phoneNumber: ''
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id)
    if(e.target.id === 'name' || e.target.id === 'city') {
      validateTextFields(e.target.id, e.target.value);
    }

    if(e.target.id === 'email') {
      validateEmail(e.target.value)
    }

    if(e.target.id === 'phoneNumber') {
      validatePhoneNumber(e.target.value)
    }

    if(e.target.id === 'dateBirth') {
      validateDateField(e.target.value)
    }
  }

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const isFormValid = Object.values(formData).every((field) => field.length > 0);
    if(isFormValid) {
      setIsFormValid(true)
    }

  }, [formData, formErrors])
  
  const fieldsData  = [
    { type: 'text', id: 'name', label: 'Nombre'},
    { type: 'email', id: 'email', label: 'Email' },
    { type: 'date', id: 'dateBirth', label: 'Fecha de nacimiento' },
    { type: 'text', id: 'city', label: 'Ciudad' },
    { type: 'number', id: 'phoneNumber', label: 'Telefono' }
  ]

  const fields = fieldsData.map((field) => {
    return (
      <div 
        className="flex flex-col justify-center pb-4 relative m-2" 
        key={field.id}>
        <label 
          className='text-14 font-lato pb-10' 
          htmlFor={field.id}>
            {t(`${field.id}`)}
          </label>
        <input
          className='border h-30 rounded-lg p-3'
          type={field.type} id={field.id}
          value={formData[field.id]}
          placeholder={t(`${field.id}Placeholder`)}
          onChange={handleChange}
          onBlur={handleBlur} />
        <span className='text-rose-500 absolute bottom-[-5px]'>{formErrors[field.id]}</span>
      </div>
    )
  })

  return (
    <div className="bg-white rounded-lg w-full h-full md:w-[500px] md:h-auto p-24">
      <h1 className='font-openSans font-semibold text-center text-24 md:text-36 mt-20'>{t('contactClimo')}</h1>
      <form className='md:px-8 gap-4'>
        {fields}
        <button
          className={`w-full bg-scarpa text-white block mt-16 text-12 h-30 border rounded-xl ${!isFormValid ? "pointer-events-none button-disabled" : "pointer-events-auto"}`}
          type='submit'
          disabled={isFormValid}>
            {t('send')}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
