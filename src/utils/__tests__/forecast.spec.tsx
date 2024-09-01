import { describe, it, expect, vi } from 'vitest';
import { formatDate, getHour, getDayForecast, getNextDaysForecast } from '../forecast';

vi.spyOn(Date, 'now').mockImplementation(() => 1725009600000);

describe('forecast', () => {
  describe('formatDate', () => {
    it('should format the date', () => {
      const date = 1725009600;
      expect(formatDate(date)).toBe('2024-08-30');
    })
  })

  describe('getHour', () => {
    it('should get the hour', () => {
      const date = 1725009600;
      expect(getHour(date)).toBe(11);
    })
  })

  describe('getDayForecast', () => {
    it('should get the day forecast', () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(today.getDate() + 2);

      const todayYear = today.getFullYear();
      const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
      const todayDay = String(today.getDate()).padStart(2, '0');
      const todayHours = String(today.getHours()).padStart(2, '0');
      const todayMinutes = String(today.getMinutes()).padStart(2, '0');
      const todaySeconds = String(today.getSeconds()).padStart(2, '0');
      const todayDate = `${todayYear}-${todayMonth}-${todayDay} ${todayHours}:${todayMinutes}:${todaySeconds}`;
      
      const dayAfterTomorrowYear = tomorrow.getFullYear();
      const dayAfterTomorrowMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dayAfterTomorrowDay = String(tomorrow.getDate()).padStart(2, '0');
      const dayAfterTomorrowHours = String(tomorrow.getHours()).padStart(2, '0');
      const dayAfterTomorrowMinutes = String(tomorrow.getMinutes()).padStart(2, '0');
      const dayAfterTomorrowSeconds = String(tomorrow.getSeconds()).padStart(2, '0');
      const dayAfterTomorrowDate = `${dayAfterTomorrowYear}-${dayAfterTomorrowMonth}-${dayAfterTomorrowDay} ${dayAfterTomorrowHours}:${dayAfterTomorrowMinutes}:${dayAfterTomorrowSeconds}`;

      const tomorrowYear = tomorrow.getFullYear();
      const tomorrowMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const tomorrowDay = String(tomorrow.getDate()).padStart(2, '0');
      const tomorrowHours = String(tomorrow.getHours()).padStart(2, '0');
      const tomorrowMinutes = String(tomorrow.getMinutes()).padStart(2, '0');
      const tomorrowSeconds = String(tomorrow.getSeconds()).padStart(2, '0');
      const tomorrowDate = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay} ${tomorrowHours}:${tomorrowMinutes}:${tomorrowSeconds}`;

      const list = [
        {dt_txt: dayAfterTomorrowDate},
        {dt_txt: tomorrowDate},
        {dt_txt: todayDate},
      ]
      const expected = [
        {"dt_txt": todayDate}
      ]

      console.log(getDayForecast(list))
      expect(getDayForecast(list)).toEqual(expected)
    })
  })

  describe('getNextDaysForecast', () => {
    it('should get the next days forecast', () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(today.getDate() + 2);

      const todayYear = today.getFullYear();
      const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
      const todayDay = String(today.getDate()).padStart(2, '0');
      const todayHours = String(today.getHours()).padStart(2, '0');
      const todayMinutes = String(today.getMinutes()).padStart(2, '0');
      const todaySeconds = String(today.getSeconds()).padStart(2, '0');
      const todayDate = `${todayYear}-${todayMonth}-${todayDay} ${todayHours}:${todayMinutes}:${todaySeconds}`;
      
      const dayAfterTomorrowYear = tomorrow.getFullYear();
      const dayAfterTomorrowMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dayAfterTomorrowDay = String(tomorrow.getDate()).padStart(2, '0');
      const dayAfterTomorrowHours = String(tomorrow.getHours()).padStart(2, '0');
      const dayAfterTomorrowMinutes = String(tomorrow.getMinutes()).padStart(2, '0');
      const dayAfterTomorrowSeconds = String(tomorrow.getSeconds()).padStart(2, '0');
      const dayAfterTomorrowDate = `${dayAfterTomorrowYear}-${dayAfterTomorrowMonth}-${dayAfterTomorrowDay} ${dayAfterTomorrowHours}:${dayAfterTomorrowMinutes}:${dayAfterTomorrowSeconds}`;

      const tomorrowYear = tomorrow.getFullYear();
      const tomorrowMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const tomorrowDay = String(tomorrow.getDate()).padStart(2, '0');
      const tomorrowHours = String(tomorrow.getHours()).padStart(2, '0');
      const tomorrowMinutes = String(tomorrow.getMinutes()).padStart(2, '0');
      const tomorrowSeconds = String(tomorrow.getSeconds()).padStart(2, '0');
      const tomorrowDate = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay} ${tomorrowHours}:${tomorrowMinutes}:${tomorrowSeconds}`;

      const list = [
        {dt_txt: dayAfterTomorrowDate},
        {dt_txt: tomorrowDate},
        {dt_txt: todayDate},
      ]
      const expected = [
        {dt_txt: tomorrowDate},
      ]

      expect(getNextDaysForecast(list)).toEqual(expected)
    })
  })
});
