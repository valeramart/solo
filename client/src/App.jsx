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
  const [user, setUser] = useState();

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

  const signupHandler = async (e, formData) => {
    e.preventDefault();
    const response = await axiosInstance.post('/signup', formData);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
  };

  const loginHandler = async (e, formData) => {
    e.preventDefault();
    const response = await axiosInstance.post('/login', formData);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance.get("/logout");
    setUser(null);
    setAccessToken('');
  };

  const router = createBrowserRouter([
    {
      element: <Layout user={user}  logoutHandler={logoutHandler}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage/>,
        },
        {
          path: '/bot',
          element: <BotPage />,
        },        
        {
          path: '/products',
          element: <ProductPage user={user}/>,
        },
        {
          path: '/basket',
          element: <BasketPage />,
        },
        {
          path: '/login',
          element: <LoginPage  loginHandler={loginHandler}/>,
        },
        {
          path: '/signup',
          element: <SignupPage signupHandler={signupHandler}/>,
        },
],
},
])
return <RouterProvider router={router} />;
}

export default App
