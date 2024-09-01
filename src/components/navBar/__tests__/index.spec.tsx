import {describe, it, vi } from 'vitest';
import { render, screen} from '@testing-library/react';
import NavBar from '../index';
import userEvent from '@testing-library/user-event'

const changeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn().mockImplementation(() => ({ 
    t: (key: string) => key,
    i18n: {
      changeLanguage,
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
    userEvent.dblClick(element);
  })
})
