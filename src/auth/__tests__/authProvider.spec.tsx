import { describe, it} from 'vitest';
import { render } from '@testing-library/react';
import AuthProvider,  { useAuth } from '../authProvider';

const MockComponent = () => {
  const { isAuthenticated } = useAuth();
  return <div>Is Authenticated: {isAuthenticated.toString()}</div>;
};


describe('AuthProvider', () => {
  it('should render AuthProvider component', () => {
    const propsMock = <div>Hello World</div>;
    render(<AuthProvider children={propsMock} />);
  });

  it('should set isAuthenticated to true if localStorage has isAuthenticated set to true', () => {
    localStorage.setItem('isAuthenticated', 'true');

    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );
  });
})
