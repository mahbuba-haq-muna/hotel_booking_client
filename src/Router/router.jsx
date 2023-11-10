
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Root from '../Layout/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Component/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`/public/testimonial.json`)
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;