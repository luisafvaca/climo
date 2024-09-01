import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import DayForecast from '../index';
import { DayForecastProps } from '../types';
import { amPropsMock, pmPropsMock } from './mocks/dayForecastPropsMock';
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('DayForecast', () => {
    it('should render DayForecast component', async () => {
        const dailySummaryForecast: DayForecastProps['dailySummaryForecast'] = amPropsMock

        render(<DayForecast dailySummaryForecast={dailySummaryForecast} />);
        expect(screen.getByRole('time').textContent).toBe('6 am');
    });

    describe('should set pm to time', () => {
        it('should render pm to time', async () => {
            const dailySummaryForecast: DayForecastProps['dailySummaryForecast'] = pmPropsMock

            render(<DayForecast dailySummaryForecast={dailySummaryForecast} />);
            expect(screen.getByRole('time').textContent).toBe('18 pm');
        });
    });
});
