
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Root from '../Layout/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Page/Login/Login';
import Register from '../Page/Login/Register/Register';
import Rooms from '../Page/Rooms/Rooms';
import RoomDetails from '../Component/RoomDetails/RoomDetails';
import MyBookings from '../Page/MyBookings/MyBookings';

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
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/rooms',
          element : <Rooms></Rooms>,
          loader: () => fetch(`http://localhost:5000/rooms`)
        },
      {
        path: '/rooms/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      } ,
      {
        path: '/myBookings',
        element: <MyBookings></MyBookings>
      }
      ]
    },
  ]);

export default router;