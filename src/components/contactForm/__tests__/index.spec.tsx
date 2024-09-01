import { render, screen, fireEvent} from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import ContactForm from '../index';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ContactForm', () => {
    it('should render ContactForm component', async () => {
        render(<ContactForm />);
        expect(screen.getByRole('heading').textContent).toBe('contactClimo');
    });

    it('should set as valid form', async () => {
        render(<ContactForm />);
        const name = await screen.getByRole('contactForm-name');
        const email = await screen.getByRole('contactForm-email');
        const dateBirth = await screen.getByRole('contactForm-dateBirth');
        const city = await screen.getByRole('contactForm-city');
        const phoneNumber = await screen.getByRole('contactForm-phoneNumber');

        await userEvent.type(name, 'Mock name');
        fireEvent.blur(name)
        await userEvent.type(email, 'mock@email.com');
        fireEvent.blur(email)
        await userEvent.type(dateBirth, '11/09/1991');
        fireEvent.blur(dateBirth)
        await userEvent.type(city, 'mock city');
        fireEvent.blur(city)
        await userEvent.type(phoneNumber, '3212790564');
        fireEvent.blur(phoneNumber)
    });

    it('should set as invalid form', async () => {
        render(<ContactForm />);
        const name = await screen.getByRole('contactForm-name');
        const email = await screen.getByRole('contactForm-email');
        const dateBirth = await screen.getByRole('contactForm-dateBirth');
        const city = await screen.getByRole('contactForm-city');
        const phoneNumber = await screen.getByRole('contactForm-phoneNumber');

        await userEvent.type(name, 'Mo');
        fireEvent.blur(name)
        await userEvent.type(email, 'mockemail.com');
        fireEvent.blur(email)
        await userEvent.type(dateBirth, ' ');
        fireEvent.blur(dateBirth)
        await userEvent.type(city, ' ');
        fireEvent.blur(city)
        await userEvent.type(phoneNumber, '12234');
        fireEvent.blur(phoneNumber)
    });

    it('should set as invalid form', async () => {
        render(<ContactForm />);
        const name = await screen.getByRole('contactForm-name');
        const email = await screen.getByRole('contactForm-email');
        const dateBirth = await screen.getByRole('contactForm-dateBirth');
        const city = await screen.getByRole('contactForm-city');
        const phoneNumber = await screen.getByRole('contactForm-phoneNumber');

        await userEvent.type(name, ' ');
        fireEvent.blur(name)
        await userEvent.type(email, ' ');
        fireEvent.blur(email)
        await userEvent.type(dateBirth, ' ');
        fireEvent.blur(dateBirth)
        await userEvent.type(city, ' ');
        fireEvent.blur(city)
        await userEvent.type(phoneNumber, ' ');
        fireEvent.blur(phoneNumber)
    });
});
