import { useTranslation } from 'react-i18next';
import './index.css';

function WeekForecast({weekSummaryForecast}) {
  const { t } = useTranslation();

  const dailySummaryForecast = weekSummaryForecast && weekSummaryForecast.map((item, index) => {
    const dayKey = new Date(item.dt_txt).getDay();
    const tempMin = `${Math.trunc(item.main.temp_min)}º`;
    const tempMax = `${Math.trunc(item.main.temp_max)}º`;
    const day = index === 0 ? t(`tomorrow`) : t(`day${dayKey}`)
    return (
      <div key={item.dt} className='week-forecast-content flex justify-between items-center p-3 border-b hover:bg-cyan-700 rounded-t-lg'>
        <div className='flex items-center'>
          <p className='w-32 text-14'>{ day }</p>
          <img className="h-40" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="thuderstorm" />
        </div>
        <p className='text-14'> {t('min')} <span>{tempMin}</span> ⎯ {t('max')} <span>{tempMax}</span></p>
      </div>
    )
  });

  return (
    <section className='week-forecast mt-16 py-16 px-18 rounded-lg font-sans text-white'>
      <h1 className='text-16 mb-16'>{t('weekForecast')}</h1>
      {dailySummaryForecast}
    </section>
  )
}

export default WeekForecast