import { createBrowserRouter } from 'react-router-dom'
import { MAIN_ROUTES } from './lazyComponents'
import advisorRouter from './advisorRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MAIN_ROUTES.lazyHome />,
    errorElement: <MAIN_ROUTES.lazyNotFound />,
  },
  {
    path: '/advisor',
    element: <MAIN_ROUTES.lazyAdvisor />,
    errorElement: <MAIN_ROUTES.lazyNotFound />,
    children: advisorRouter
  },
  {
    path: '*',
    errorElement: <MAIN_ROUTES.lazyNotFound />
  }
])
