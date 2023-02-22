import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ItemDetail from './components/ItemDetail';
import ErrorPage from './ErrorPage';
import ItemList from './components/ItemList';
import Event, { Cupon, Service } from './components/Event';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <ItemList />,
      },
      {
        path: 'event',
        element: <Event />,
        children: [
          {
            path: 'one',
            element: <Service />,
          },
          {
            path: 'two',
            element: <Cupon />,
          },
        ],
      },
      {
        path: 'detail/:id',
        element: <ItemDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
