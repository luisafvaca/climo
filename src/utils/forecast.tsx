function formatDate(timestamp: Date) {
  const date: Date = new Date(timestamp* 1000);
  return date.toISOString().split('T')[0];
}

function getHour(timestamp: Date) {
  const date: Date = new Date(timestamp* 1000);
  return date.getHours();
}

function getDayForecast(list: Array<any>) {
  const today = new Date().getDate();
  return list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    return date === today;
  });
}

function getNextDaysForecast(list: Array<any>) {
  const today = new Date().getDate();
  const nextDaysForecast = list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    return date !== today;
  });
  const groupeNextDaysForecast = nextDaysForecast.reduce((acc, item) => {
    const date = formatDate(item.dt);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  })
  return groupeNextDaysForecast;
}

export {
  getDayForecast,
  getNextDaysForecast,
  formatDate,
  getHour
}