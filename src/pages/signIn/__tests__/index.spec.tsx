
import { describe, it, vi} from 'vitest';
import { render } from "@testing-library/react";
import SingIn from '../index';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
    useNavigate: () => vi.fn(),
}));

describe('SingIn', () => {
    it('should render SingIn component', async () => {
        render(<SingIn/>);
    })
});
