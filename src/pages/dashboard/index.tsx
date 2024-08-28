import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherType } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';
import resolveImage from '../../utils/resolveImage';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP
  const weatherRepository = new WeatherRepository(apiUrl as any, apiKey as any)
  const [weather, setWeather] = useState<WeatherType|null>(null)
  const [weatherCode, setWeatherCode] = useState<number>(0)
  const { t } = useTranslation();

  useEffect(() => {
    if (weather === null) {
      weatherRepository.getWeatherByCity(43.70011, -79.4163).then((data) => {
        setWeather(data);
        setWeatherCode(data?.weather[0].id)
      });
    }
  }, [weather, weatherRepository]);

  const image = resolveImage(weatherCode)
  console.log(weatherCode, image, weather)


  return (
    <div>
      {weather && (
        <Hero
          city={t(`${weather.name}`)}
          temperature={`${Math.trunc(weather.main.temp)}º`}
          weatherDescription={t(`${weatherCode}`)}
          minTemperature={`${Math.trunc(weather.main.temp_max)}º`}
          maxTemperature={`${Math.trunc(weather.main.temp_min)}º`}
          image={image}
          icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      )}
    </div>
  )
}

export default Dashboard
