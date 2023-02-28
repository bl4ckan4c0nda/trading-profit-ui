import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Dashboard from './routes/dashboard';
import History from './routes/history';
import Plans from './routes/plans';
import Support from './routes/support'
import Settings from './routes/settings'
import Login from './routes/login'
import Register from './routes/register';
import './index.css'
import './assets/flaticon/flaticon_mycollection.css'
import PlanManagement from './routes/planManagement';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: '/my',
    element: <Root />,
    children: [
      {
        element: <Index />,
        children: [
          { path: '/my/dashboard', element: <Dashboard /> },
          { path: '/my/history', element: <History /> },
          { path: '/my/plans', element: <Plans /> },
          { path: '/my/support', element: <Support /> },
          { path: '/my/settings', element: <Settings /> },
        ]
      },
      { path: '/my/plan-management/:activePlanId', element: <PlanManagement /> }
    ]
  },



])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
