import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ErrorPage from './components/pages/ErrorRage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/SignupPage';
import ProductPage from './components/pages/ProductsPage';
import BasketPage from './components/pages/BasketPage';
import ProductPageUser from './components/pages/productsUser';
import axiosInstance, { setAccessToken } from './services/axiosInstance';
import './index.css';


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
          element: <MainPage user={user}/>,
        },      
        {
          path: '/products',
          element: <ProductPage user={user}/>,
        },
        {
          path: '/productsUser',
          element: <ProductPageUser user={user}/>,
        },
        {
          path: '/basket',
          element: <BasketPage user={user}/>,
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
