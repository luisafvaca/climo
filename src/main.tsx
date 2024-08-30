import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SingIn from './pages/signIn/index.tsx';
import Dashboard from './pages/dashboard/index.tsx';

import './i18n';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn />
  },
  {
    path: "/login",
    element: <SingIn />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
