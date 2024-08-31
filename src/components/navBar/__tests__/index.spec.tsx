import {describe, it, vi } from 'vitest';
import { render, screen} from '@testing-library/react';
import NavBar from '../index';
import userEvent from '@testing-library/user-event'

const changeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    changeLanguage: () => changeLanguage(),
  }),
}));

describe('NavBar', () => {
  it('should render NavBar component', () => {
    render(<NavBar/>);
  });

  it('should change language', () => {
    render(<NavBar/>);
    const element = screen.getByRole('change-language');
    userEvent.click(element);
  })
})
