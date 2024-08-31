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
      const list = [
        {dt_txt: '2024-09-02 11:00:00'},
        {dt_txt: '2024-09-01 15:00:00'},
        {dt_txt: '2024-08-31 15:00:00'},
      ]
      const expected = [
        {"dt_txt": "2024-08-31 15:00:00",}
      ]
      expect(getDayForecast(list)).toEqual(expected)
    })
  })

  describe('getNextDaysForecast', () => {
    it('should get the next days forecast', () => {
      const list = [
        {dt_txt: '2024-09-02 11:00:00'},
        {dt_txt: '2024-09-01 15:00:00'},
        {dt_txt: '2024-08-31 15:00:00'},
      ]
      const expected = [
        {dt_txt: '2024-09-02 11:00:00'},
        {dt_txt: '2024-09-01 15:00:00'},
      ]
      expect(getNextDaysForecast(list)).toEqual(expected)
    })
  })
});