import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import DayForecast from '../index';
import { DayForecastProps } from '../types';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('DayForecast', () => {
    it('should render DayForecast component', async () => {
        const dailySummaryForecast: DayForecastProps['dailySummaryForecast'] = [
          {
            "dt": 1725084000,
            "main": {
                "temp": 32.43,
                "feels_like": 37.78,
                "temp_min": 29.21,
                "temp_max": 32.43,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1009,
                "humidity": 59,
                "temp_kf": 3.22
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 4.96,
                "deg": 213,
                "gust": 4.69
            },
            "visibility": 10000,
            "pop": 0.8,
            "sys": {
              "pod": "pod",
            },
            "dt_txt": "2024-08-31 06:00:00"
          },
        ]

        render(<DayForecast dailySummaryForecast={dailySummaryForecast} />);
        expect(screen.getByRole('time').textContent).toBe('6 am');
    });

    describe('should set pm to time', () => {
        it('should render pm to time', async () => {
            const dailySummaryForecast: DayForecastProps['dailySummaryForecast'] = [
              {
                "dt": 1725030000,
                "main": {
                    "temp": 32.43,
                    "feels_like": 37.78,
                    "temp_min": 29.21,
                    "temp_max": 32.43,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1009,
                    "humidity": 59,
                    "temp_kf": 3.22
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 4.96,
                    "deg": 213,
                    "gust": 4.69
                },
                "visibility": 10000,
                "pop": 0.8,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2024-08-31 18:00:00"
              },
            ]

            render(<DayForecast dailySummaryForecast={dailySummaryForecast} />);
            expect(screen.getByRole('time').textContent).toBe('18 pm');
        });
    });
});