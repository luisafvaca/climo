import {expect, describe, it, vi} from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn().mockReturnValue(vi.fn()),
}));

describe('App', () => {
    it('should render App component', async () => {
      render(<App />);
      expect(await screen.findByText('welcomeMessage')).toBeTruthy();
    });
})