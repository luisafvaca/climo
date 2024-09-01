import { describe, it, vi} from 'vitest';
import { render, act} from '@testing-library/react';
import Dashboard from '../index';

vi.mock('../../../repositories/weatherRepository', () => ({
  default: class {
    async getWeatherByCity() {
      return {
          city: 'Tokyo',
          country: 'JP',
          temperature: 20,
          feelsLike: 20,
          humidity: 20,
          pressure: 20,
          windSpeed: 20,
          weather: 'Clear',
          icon: '01d',
          main: {
              temp: 20,
          }
      };
    }
    async getWeatherForecast() {
      return {
        city: {
          name: 'Tokyo',
        },
        list: [
          {
            dt_txt: '2021-09-01 00:00:00',
            dt: 1630454400,
            main: { temp: 20 },
            weather: [
              {
                icon: '01d',
                description: 'Clear',
              },
            ],
          },
        ],
      }
    }
  },
}));

describe('Dashboard', () => {
  it('should render Dashboard component', async () => {
    await act( async () => render(<Dashboard/>));
  });

  it('should catch error', async () => {
    vi.mock('../../../repositories/weatherRepository', () => ({
      default: class {
        async getWeatherByCity() {
          throw new Error('Error');
        }
        async getWeatherForecast() {
          throw new Error('Error');
        }
      },
    }));
    await act( async () => render(<Dashboard/>));
  });
});
