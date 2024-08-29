import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherByCityType,  WeatherForecast, List } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';
import DayForecast from '../..//components/dayForecast';
import WeekForecast from '../../components/weekForecast';
import resolveImage from '../../utils/resolveImage';
import { getDayForecast, getNextDaysForecast } from '../../utils/forecast';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP

  const weatherRepository = new WeatherRepository(apiUrl as any, apiKey as any)
  const [weather, setWeather] = useState<WeatherByCityType|null>(null)
  const [weatherCode, setWeatherCode] = useState<number>(0)
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast|null>(null)
  const [dailySummaryForecast, setDailySummaryForecast] = useState<List|null>(null)
  const [weekSummaryForecast, setWeekSummaryForecast] = useState<List|null>(null)

  const { t } = useTranslation();

  useEffect(() => {
    if (weather === null) {
      weatherRepository.getWeatherByCity(51.509865, -0.118092).then((data) => {
        setWeather(data);
        setWeatherCode(data?.weather[0].id)
      });
    }
    if(weatherForecast === null) {
      weatherRepository.getWeatherForecast(51.509865, -0.118092).then((data) => {
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

  const image = resolveImage(weatherCode)

  return (
    <div className='m-24 lg:flex lg: gap-9'>
      {weather && (
        <Hero
          city={t(`${weather.name}`)}
          temperature={`${Math.trunc(weather.main.temp)}º`}
          weatherDescription={t(`${weatherCode}`)}
          minTemperature={`${Math.trunc(weather.main.temp_min)}º`}
          maxTemperature={`${Math.trunc(weather.main.temp_max)}º`}
          image={image}
          icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      )}
      <div>
        <DayForecast dailySummaryForecast={dailySummaryForecast}/>
        <WeekForecast weekSummaryForecast={weekSummaryForecast}/>
      </div>
    </div>
  )
}

export default Dashboard
