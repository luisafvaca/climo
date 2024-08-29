import {describe, it, vi} from 'vitest';
import { render } from '@testing-library/react';
import NavBar from '../index';
import userEvent from '@testing-library/user-event'
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('NavBar', () => {
    it('should render NavBar component', () => {
        render(<NavBar/>);
    });
    it('should change language', () => {
        const { getByText } = render(<NavBar/>);
        userEvent.click(getByText('EN'));
    })
})
