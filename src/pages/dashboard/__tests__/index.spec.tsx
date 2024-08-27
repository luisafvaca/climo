import { describe, it, expect, vi} from 'vitest';
import { render, screen, act} from '@testing-library/react';
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
            };
        }
    },
}));

describe('Dashboard', () => {
    it('should render Dashboard component', async () => {
      await act( async () => render(<Dashboard/>));
        const headingElement = screen.getByText('I\'m going to be a Dashboard forecast weather');
        expect(headingElement.textContent).toBe(`I'm going to be a Dashboard forecast weather`);
    });
});
