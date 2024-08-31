import { useTranslation } from 'react-i18next';
import type { DayForecastProps } from './types';
import './index.css';

function DayForecast({dailySummaryForecast}: DayForecastProps) {
  const { t } = useTranslation();
  const predictions = dailySummaryForecast && dailySummaryForecast.map(item => {
    const hour = new Date(item.dt_txt).getHours();
    const isTime = hour > 12 ? 'pm' : 'am';
    const time = `${hour} ${isTime}`;

    return (
      <div key={item.dt} className='hour-forecast flex flex-col items-center p-10 rounded-md hover:bg-cyan-700'>
        <p role='time' className='text-18 md-text-20'>{time}</p>
        <img className="h-40" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='thuderstorm' />
        <p className='text-18 md:text-20'>{`${Math.trunc(item.main.temp)}º`}</p>
        <p className='text-10 w-max'key={item.dt}>{ t(`${item.weather[0].id}`)}</p>
      </div>
    )
  })
  return (
    <section className='day-forecast mt-16 lg:m-0 py-16 px-18 rounded-lg font-sans text-white'>
      <h2 className='text-16'>{t("dayForecastTitle")}</h2>
      <p className='text-12 font-lato'>{t("dayForecastDescription")}</p>
      <div className='hour-forecast-container flex gap-3 mt-24'>{predictions}</div>
    </section>
  );
}

export default DayForecast;
