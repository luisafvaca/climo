import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import WeatherRepository from '../../repositories/weatherRepository';
import type { WeatherByCityType, List } from '../../repositories/weatherRepository/types';
import Hero from '../../components/hero';
import NavBar from '../../components/navBar';
import DayForecast from '../..//components/dayForecast';
import WeekForecast from '../../components/weekForecast';
import resolveImage from '../../utils/resolveImage';
import { getDayForecast, getNextDaysForecast } from '../../utils/forecast';
import countries from '../../utils/countries.json';

function Dashboard() {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP
  const apiUrl = import.meta.env.VITE_BASE_URL_WEATHER_MAP

  const weatherRepositoryRef = useRef<WeatherRepository | null>(null);

  if (!weatherRepositoryRef.current) {
    weatherRepositoryRef.current = new WeatherRepository(apiUrl as string, apiKey as string);
  }

  const weatherRepository = weatherRepositoryRef.current; 

  const [weather, setWeather] = useState<WeatherByCityType|null>(null)
  const [weatherCode, setWeatherCode] = useState<number>(0)
  const [dailySummaryForecast, setDailySummaryForecast] = useState<List[]>([])
  const [weekSummaryForecast, setWeekSummaryForecast] = useState<List[]>([])
  const [currentCity, setCurrentCity] = useState<string>('london')

  const { t } = useTranslation();

  const fetchData = async (lat: number, long: number) => {
    try {
      const weatherData = await weatherRepository.getWeatherByCity(lat, long)
      const weatherForecastData = await weatherRepository.getWeatherForecast(lat, long)
      setWeather(weatherData)
      setWeatherCode(weatherData?.weather[0].id)
 
      const dailyForecast = await getDayForecast(weatherForecastData?.list)
      setDailySummaryForecast(dailyForecast)

      const weekForecast = await getNextDaysForecast(weatherForecastData.list)
      setWeekSummaryForecast(weekForecast)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const currentCityInformation = countries[currentCity]
    const lat = currentCityInformation.lat
    const long = currentCityInformation.long
    
    fetchData(lat, long)
  }, [currentCity])

  const handleChangeCity = (option: string) => {
    setCurrentCity(option)
  }

  const image = resolveImage(weatherCode)

  return (
    <>
      <NavBar />
      <div className='m-24 lg:flex lg: gap-9'>
        <div className='w-full lg:w-3/6'>
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
        </div>

        <div className='lg:w-3/6'>
          <DayForecast dailySummaryForecast={dailySummaryForecast}/>
          <WeekForecast weekSummaryForecast={weekSummaryForecast}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
