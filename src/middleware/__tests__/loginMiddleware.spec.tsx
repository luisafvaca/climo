import { describe, it, vi} from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoginMiddleware from '../loginMiddleware';

const useAuth = vi.fn();
vi.mock('../auth/authProvider', () => ({
  useAuth: useAuth,
}));

describe('LoginMiddleware', () => {
  it('should navigate to "/" if not authenticated', () => {
    (useAuth).mockReturnValue({ isAuthenticated: false });

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route element={<LoginMiddleware />}>
            <Route path="/protected" element={<div>Protected Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  it('should render the Outlet component if authenticated', () => {
    (useAuth).mockReturnValue({ isAuthenticated: true });

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route element={<LoginMiddleware />}>
            <Route path="/protected" element={<div>Protected Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });
});
