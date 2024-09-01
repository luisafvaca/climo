import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginMiddleware from './middleware/loginMiddleware.tsx';
import SingIn from './pages/signIn/index.tsx';
import Dashboard from './pages/dashboard/index.tsx';
import AuthProvider from './auth/authProvider.tsx';

import './i18n';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn />
  },
  {
    path: "/",
    element: <LoginMiddleware />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
