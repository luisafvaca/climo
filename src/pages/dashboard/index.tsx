import { useState, useEffect } from 'react'
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherType } from '../../repositories/weatherRepository/types';

function Dashboard() {
  const apyKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP
  const weatherRepository = new WeatherRepository(apiUrl as any, apyKey as any)
  const [weather, setWeather] = useState<WeatherType|null>(null)


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
    </div>
  )
}

export default Dashboard