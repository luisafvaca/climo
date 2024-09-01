
import { describe, it, vi} from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SingIn from '../index';


vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const navigate = vi.fn();
vi.mock('react-router-dom', vi.fn().mockImplementation(() => ({
    useNavigate: () => navigate
})));

describe('SingIn', () => {
    it('should render SingIn component', async () => {
        render(<SingIn/>);
    })

    it('should set as valid form', async () => {
        render(<SingIn/>);
        const submit = await screen.getByRole('submit');
        const password = await screen.getByRole('password');
        const email = await screen.getByRole('email');
        await userEvent.type(email, "test@emai.com");
        fireEvent.blur(email)
        await userEvent.type(password, "password");
        fireEvent.blur(password)
        await userEvent.click(submit);
    })
 
    it('should set as invalid form', async () => {
        render(<SingIn/>);
        const submit = await screen.getByRole('submit');
        const password = await screen.getByRole('password');
        const email = await screen.getByRole('email');
        await userEvent.type(email, ' ');
        fireEvent.blur(email)
        await userEvent.type(password, ' ');
        fireEvent.blur(password)
        await userEvent.click(submit);
    })
});

