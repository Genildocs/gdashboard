import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'users',
        children: [
          {
            element: <List />,
            index: true,
          },
          {
            path: ':userId',
            element: <Single />,
          },
          {
            path: 'new',
            element: <New />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },

  {
    path: 'products',
    children: [
      {
        element: <List />,
        index: true,
      },
      {
        path: ':productId',
        element: <Single />,
      },
      {
        path: 'new',
        element: <New />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
