import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ErrorPage from './components/pages/ErrorRage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/SignupPage';
import BotPage from './components/pages/BotPage';
import ProductPage from './components/pages/ProductsPage';
import BasketPage from './components/pages/BasketPage';
import axiosInstance, { setAccessToken } from './services/axiosInstance';


function App() {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const router = createBrowserRouter([
    {
      element: <Layout user={user}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/bot',
          element: <BotPage />,
        },        
        {
          path: '/products',
          element: <ProductPage />,
        },
        {
          path: '/basket',
          element: <BasketPage />,
        },
        {
          path: '/login',
          element: <LoginPage  />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
]}
])
return <RouterProvider router={router} />;
}

export default App
