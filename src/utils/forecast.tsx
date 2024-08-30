import type { List } from '../repositories/weatherRepository/types';

function formatDate(timestamp: Date) {
  const date: Date = new Date(timestamp* 1000);
  return date.toISOString().split('T')[0];
}

function getHour(timestamp: Date) {
  const date: Date = new Date(timestamp * 1000);
  return date.getHours();
}

function getDayForecast(list: Array<List>) {
  const today = new Date().getDate();
  return list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    return date === today;
  });
}

function getNextDaysForecast(list: Array<List>) {
  const today = new Date().getDate();
  const nextDaysForecast = list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    return date !== today;
  });

  const temporal: {[key: string]: number}= {};
  const filtered: Array<List> = [];
  nextDaysForecast.forEach((item) => {
    const date = new Date(item.dt_txt).getDate();
    if (!temporal[date]) {
      temporal[date] = date
      filtered.push(item);
    }
  })

  return filtered;
}

export {
  getDayForecast,
  getNextDaysForecast,
  formatDate,
  getHour
}
