import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CartPage from './pages/Cart/Cart.jsx'
import MarketPage from './pages/Market/Market.jsx'
import SettingsPage from './pages/Settings/Settings.jsx'
import LogoutPage from './pages/Logout/Logout.jsx'
import NotFoundPage from './pages/NotFound/NotFound.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        // element: <Home />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/cart",
        element: <CartPage />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/market",
        element: <MarketPage />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/settings",
        element: <SettingsPage />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/logout",
        element: <LogoutPage />,
        errorElement: <NotFoundPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
