import { useTranslation } from 'react-i18next';

interface HeroProps {
  city: string;
  temperature: string;
  weatherDescription: string;
  minTemperature: string;
  maxTemperature: string;
  icon?: string;
  image: string;
}

function Hero (
    {
      city,
      temperature,
      weatherDescription,
      minTemperature,
      maxTemperature,
      icon,
      image
    }: HeroProps
  ) {

    const { t } = useTranslation();

    return (
      <section 
        className="hero w-full flex flex-col items-center font-sans p-22 bg-cover bg-center bg-no-repeat relative rounded-lg"
        style={{ backgroundImage: `url(/public/statics/${image})`}}>
        <p className='absolute flex items-center right-9 top-1'>
          <img className="h-32" src={`${icon}`} alt="thuderstorm" />
          <span className='font-medium text-white'>°C</span>
        </p>
        <h1 className="text-24 md:text-48 text-white">{city}</h1>
        <p className="text-64 md:text-96">{temperature}</p>
        <p className="text-20 md:text-32">{weatherDescription}</p>
        <p className="text-16 md:text-24 pt-36"><span>{t('max')} {minTemperature} </span> | <span> {t('max')} {maxTemperature}</span></p>
      </section>
    )
}

export default Hero