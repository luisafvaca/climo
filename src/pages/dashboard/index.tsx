import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherByCityType,  WeatherForecast, List } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';
import DayForecast from '../..//components/dayForecast';
import WeekForecast from '../../components/weekForecast';
import resolveImage from '../../utils/resolveImage';
import { getDayForecast, getNextDaysForecast } from '../../utils/forecast';
import countries from '../../utils/countries.json';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP

  const weatherRepository = new WeatherRepository(apiUrl as string, apiKey as string)
  const [weather, setWeather] = useState<WeatherByCityType|null>(null)
  const [weatherCode, setWeatherCode] = useState<number>(0)
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast|null>(null)
  const [dailySummaryForecast, setDailySummaryForecast] = useState<List[]>([])
  const [weekSummaryForecast, setWeekSummaryForecast] = useState<List[]>([])
  const [currentCity, setCurrentCity] = useState('london')

  const { t } = useTranslation();

  useEffect(() => {
    const defaultCityInformation = countries[currentCity]
    const lat = defaultCityInformation.lat
    const long = defaultCityInformation.long
  
    if (weather === null) {
      weatherRepository.getWeatherByCity(lat, long).then((data) => {
        setWeather(data);
        setWeatherCode(data?.weather[0].id)
      });
    }
    if(weatherForecast === null) {
      weatherRepository.getWeatherForecast(lat, long).then((data) => {
        setWeatherForecast(data);
      });
    }
  
    if(weatherForecast && dailySummaryForecast.length <= 0) {
      const dailyForecast = getDayForecast(weatherForecast.list)
      setDailySummaryForecast(dailyForecast)
    }

    if(weatherForecast && weekSummaryForecast.length <= 0) {
      const weekForecast = getNextDaysForecast(weatherForecast.list)
      setWeekSummaryForecast(weekForecast)
    }
  }, [
    weather,
    weatherRepository,
    currentCity,
    dailySummaryForecast.length,
    weekSummaryForecast.length,
    weatherForecast
  ]);

  useEffect(() => {
    const currentCityInformation = countries[currentCity]
    const lat = currentCityInformation.lat
    const long = currentCityInformation.long
    weatherRepository.getWeatherByCity(lat, long).then((data) => {
      setWeather(data);
      setWeatherCode(data?.weather[0].id)
    });

    weatherRepository.getWeatherForecast(lat, long).then((data) => {
      setWeatherForecast(data);
    });

    if(weatherForecast) {
      const dailyForecast = getDayForecast(weatherForecast?.list)
      setDailySummaryForecast(dailyForecast)
      const weekForecast = getNextDaysForecast(weatherForecast?.list)
      setWeekSummaryForecast(weekForecast)
    }
  }, [currentCity])

  const handleChangeCity = (option: string) => {
    setCurrentCity(option)
  }

  const image = resolveImage(weatherCode)

  return (
    <div className='m-24 lg:flex lg: gap-9'>
      {weather && (
        <Hero
          temperature={`${Math.trunc(weather.main.temp)}º`}
          weatherDescription={t(`${weatherCode}`)}
          minTemperature={`${Math.trunc(weather.main.temp_min)}º`}
          maxTemperature={`${Math.trunc(weather.main.temp_max)}º`}
          image={image}
          currentCity={currentCity}
          icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          onChangeCity={handleChangeCity}
        />
      )}
      <div className='lg:w-3/6'>
        <DayForecast dailySummaryForecast={dailySummaryForecast}/>
        <WeekForecast weekSummaryForecast={weekSummaryForecast}/>
      </div>
    </div>
  )
}

export default Dashboard
