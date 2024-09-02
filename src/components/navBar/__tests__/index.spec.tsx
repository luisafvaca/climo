import {describe, it, vi } from 'vitest';
import { render, screen} from '@testing-library/react';
import NavBar from '../index';

const changeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn().mockImplementation(() => ({ 
    t: (key: string) => key,
    i18n: {
      changeLanguage,
      language: 'en',
    }, 
  })),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn().mockReturnValue(vi.fn()),
}));

vi.mock('../../auth/authProvider', () => ({
  useAuth: () => ({
    isAuthenticated: true,
  }),
}));

describe('NavBar', () => {
  it('should render NavBar component', () => {
    render(<NavBar/>);
  });

  it('should change language', () => {
    render(<NavBar/>);
    const element = screen.getByRole('change-language');
    element.click();
  })

  it('should togle contact form', () => {
    render(<NavBar/>);
    const element = screen.getByRole('close-contact-form');
    element.click();
  })
})
