import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherType } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP
  const weatherRepository = new WeatherRepository(apiUrl as any, apiKey as any)
  const [weather, setWeather] = useState<WeatherType|null>(null)

  const { t } = useTranslation();

  useEffect(() => {
    if (weather === null) {
      weatherRepository.getWeatherByCity(35, 139).then((data) => {
        setWeather(data);
      });
    }
  }, [weather, weatherRepository]);

  console.log(weather)
  return (
    <div>
      <h1>I'm going to be a Dashboard forecast weather</h1>
      {weather && (
        <Hero
          city={t(`${weather.name}`)}
          temperature={`${Math.trunc(weather.main.temp)}º`}
          weatherDescription={t(`${weather.cod}`)}
          minTemperature={`${Math.trunc(weather.main.temp_max)}º`}
          maxTemperature={`${Math.trunc(weather.main.temp_min)}º`}
          icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      )}
    </div>
  )
}

export default Dashboard
