import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherType } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';
import DayForecast from '../..//components/dayForecast';
import resolveImage from '../../utils/resolveImage';
import { getDayForecast, getNextDaysForecast } from '../../utils/forecast';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP

  const weatherRepository = new WeatherRepository(apiUrl as any, apiKey as any)
  const [weather, setWeather] = useState<WeatherType|null>(null)
  const [weatherCode, setWeatherCode] = useState<number>(0)
  const [weatherForecast, setWeatherForecast] = useState<WeatherType|null>(null)
  const [dailySummaryForecast, setDailySummaryForecast] = useState<WeatherType|null>(null)
  const [weekSummaryForecast, setWeekSummaryForecast] = useState<WeatherType|null>(null)

  const { t } = useTranslation();

  useEffect(() => {
    if (weather === null) {
      weatherRepository.getWeatherByCity(43.70011, -79.4163).then((data) => {
        setWeather(data);
        setWeatherCode(data?.weather[0].id)
      });
    }
    if(weatherForecast === null) {
      weatherRepository.getWeatherForecast(43.70011, -79.4163).then((data) => {
        setWeatherForecast(data);
      });
    }
  
    if(weatherForecast && !dailySummaryForecast) {
      const dailyForecast = getDayForecast(weatherForecast.list)
      setDailySummaryForecast(dailyForecast)
    }

    if(weatherForecast && !weekSummaryForecast) {
      const weekForecast = getNextDaysForecast(weatherForecast.list)
      setWeekSummaryForecast(weekForecast)
    }
  }, [weather, weatherRepository]);

  // console.log(dailySummaryForecast, '-----', weekSummaryForecast)
  const image = resolveImage(weatherCode)

  return (
    <div className='m-24'>
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
      <DayForecast dailySummaryForecast={dailySummaryForecast}/>
    </div>
  )
}

export default Dashboard
