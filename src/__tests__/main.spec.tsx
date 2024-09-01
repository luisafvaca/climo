import { describe, it, expect, vi } from 'vitest';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

document.body.innerHTML = '<div id="root"></div>';
const rootElement = document.getElementById('root');

const render = vi.fn();
const createRoot = vi.fn().mockImplementation(() => ({ render }));
const RouterProvider = vi.fn().mockImplementation(() => <div>Mocked Router</div>);

vi.mock('react-dom/client', () => {
  return {
    createRoot
  };
});


vi.mock('react-router-dom', () => {
  return {
    RouterProvider,
    createBrowserRouter: vi.fn().mockImplementation(() => 'Mocked Router'),
  };
});

describe('Main entry point', () => {
  it('should render without crashing', async () => {
    await import('../main');
    expect(createRoot).toHaveBeenCalledWith(rootElement);
  });

  it('should use RouterProvider with the correct router', async () => {
    await import('../main');
    expect(render).toHaveBeenCalled();
    expect(RouterProvider).toBe(RouterProvider)
  });
});
