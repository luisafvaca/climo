import { useTranslation } from 'react-i18next';
import type { HeroProps } from './types';
import countries from '../../utils/countries.json';
import './index.css';
function Hero (
    {
      icon,
      image,
      maxTemperature,
      minTemperature,
      temperature,
      weatherDescription,
      onChangeCity,
      currentCity
    }: HeroProps
  ) {
    const { t } = useTranslation();
    const defaultCountries = ['london', 'singapur', 'toronto']

    const countriesSelector = defaultCountries.map((country) => {
      const lat = countries[country].lat
      const long = countries[country].long
      const option = countries[country].value

      return (
        <div key={country} className="country-option text-14" lat={lat} long={long}>
          <input 
            type="radio" 
            name="city" id={country}
            className='hidden'
            value={option}
            checked={currentCity === option}
            onChange={event => {
              onChangeCity(event.target.value)
            }} />
          <label htmlFor={country}
            className='inline-block p-10 rounded-lg cursor-pointer' 
            style={{
              margin: '5px',
            }}>
              <span className='capitalize'>{option}</span>
            </label>
        </div>
      )
    })
    return (
      <section 
        className="hero w-full flex flex-col items-center font-sans p-22 bg-cover bg-center bg-no-repeat relative rounded-lg justify-center lg:w-3/6"
        style={{ backgroundImage: `url(/public/statics/${image})`}}>
        <div className='absolute flex flex-row left-9 top-4 px-16'>
          { countriesSelector}
        </div> 
        <p className='absolute flex items-center right-9 top-4'>
          <img className="h-32" src={`${icon}`} alt="thuderstorm" />
          <span className='text-14 font-medium text-white'>°C</span>
        </p>
        <span className='pt-42'>
          <h1 className="text-24 md:text-48 text-white capitalize">{currentCity}</h1>
        </span>
        <p className="text-64 md:text-96">{temperature}</p>
        <p className="text-20 md:text-32">{weatherDescription}</p>
        <p className="text-16 md:text-24 pt-44">
          <span>{t('min')} {minTemperature} </span>  
          -  
          <span>  {t('max')} {maxTemperature}</span>
        </p>
      </section>
    )
}

export default Hero