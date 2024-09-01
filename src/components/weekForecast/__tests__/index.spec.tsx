import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WeekForecast from '../index';
import weekForecastMockProps from './mocks/propsMock';
import type { WeekForecastProps } from '../types';

describe('WeekForecast', () => {
    it('should render WeekForecast component', async () => {
        const weekForecastProps: WeekForecastProps['weekSummaryForecast'] = weekForecastMockProps
        render(<WeekForecast weekSummaryForecast={weekForecastProps}/>);
        expect(screen.getByRole('heading').textContent).toBe('weekForecast');
    });
})
