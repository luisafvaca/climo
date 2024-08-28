import { useTranslation } from 'react-i18next';
import './index.css';

interface DayForecastProps {
  dailySummaryForecast: any;
}

function DayForecast({dailySummaryForecast}: DayForecastProps) {
  const { t } = useTranslation();
  const predictions = dailySummaryForecast && dailySummaryForecast.map(item => {
    const hour = new Date(item.dt_txt).getHours();
    const isTime = hour > 12 ? 'pm' : 'am';
    const time = `${hour} ${isTime}`;

    return (
      <div className='hour-forecast flex flex-col items-center p-10 rounded-md'>
        <p className='text-20'>{time}</p>
        <img className="h-40" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="thuderstorm" />
        <p className='text-20'>{`${Math.trunc(item.main.temp)}º`}</p>
        <p className='text-10'key={item.dt}>{item.weather[0].description}</p>
      </div>
    )
  })
  return (
    <section className="day-forecast mt-16 py-16 px-18 rounded-lg font-sans text-white">
      <h2 className='text-14'>{t("dayForecastTitle")}</h2>
      <p className='text-12 font-lato'>{t("dayForecastDescription")}</p>
      <div className='flex gap-16 mt-24'>{predictions}</div>
    </section>
  );
}

export default DayForecast;
