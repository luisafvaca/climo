import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
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
});
