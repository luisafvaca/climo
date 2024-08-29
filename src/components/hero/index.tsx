import { useTranslation } from 'react-i18next';
import type { HeroProps } from './types';

function Hero (
    {
      city,
      icon,
      image,
      maxTemperature,
      minTemperature,
      temperature,
      weatherDescription,
    }: HeroProps
  ) {

    const { t } = useTranslation();

    return (
      <section 
        className="hero w-full flex flex-col items-center font-sans p-22 bg-cover bg-center bg-no-repeat relative rounded-lg justify-center"
        style={{ backgroundImage: `url(/public/statics/${image})`}}>
        <p className='absolute flex items-center right-9 top-4'>
          <img className="h-32" src={`${icon}`} alt="thuderstorm" />
          <span className='text-14 font-medium text-white'>°C</span>
        </p>
        <p className='text-16 text-white'>{t('now')}</p>
        <span>
          <h1 className="text-24 md:text-48 text-white">{city}</h1>
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