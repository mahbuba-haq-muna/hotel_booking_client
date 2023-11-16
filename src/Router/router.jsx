
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Root from '../Layout/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Page/Login/Login';
import Register from '../Page/Login/Register/Register';
import Rooms from '../Page/Rooms/Rooms';
import RoomDetails from '../Component/RoomDetails/RoomDetails';
import MyBookings from '../Page/MyBookings/MyBookings';
import PrivateRoute from './PrivateRout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`/testimonial.json`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/rooms',
          element : <Rooms></Rooms>,
        },
      {
        path: '/rooms/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) => fetch(`https://hotel-booking-server-navy.vercel.app/rooms/${params.id}`)
      } ,
      {
        path: '/myBookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      }
      ]
    },
  ]);

export default router;