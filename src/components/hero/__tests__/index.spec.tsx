import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { HeroProps } from '../types';
import Hero from '../index';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ContactForm', () => {
    it('should render ContactForm component', async () => {
        const props: HeroProps= {
            icon: 'icon',
            image: 'image',
            maxTemperature: '30',
            minTemperature: '20',
            temperature: '25',
            weatherDescription: 'description',
            onChangeCity: vi.fn(),
            currentCity: 'city',
        }
        render(<Hero  
            icon={props.icon}
            image={props.image}
            weatherDescription={props.weatherDescription}
            maxTemperature={props.maxTemperature}
            minTemperature={props.minTemperature}
            temperature={props.weatherDescription}
            onChangeCity={props.onChangeCity}
            currentCity={props.currentCity}
        />);
        expect(screen.getByRole('heading').textContent).toBe('city');
    });

    it('should call onChangeCity when input is clicked', async () => {
        const props: HeroProps= {
            icon: 'icon',
            image: 'image',
            maxTemperature: '30',
            minTemperature: '20',
            temperature: '25',
            weatherDescription: 'description',
            onChangeCity: vi.fn(),
            currentCity: 'city',
        }

        render(<Hero  
            icon={props.icon}
            image={props.image}
            maxTemperature={props.maxTemperature}
            minTemperature={props.minTemperature}
            temperature={props.weatherDescription}
            onChangeCity={props.onChangeCity}
            currentCity={props.currentCity}
        />);

        const input = screen.getByText('london')
        input.click();
        expect(props.onChangeCity).toHaveBeenCalled();
    })
});
