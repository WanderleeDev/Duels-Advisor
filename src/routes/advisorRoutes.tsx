import { RouteObject } from 'react-router-dom'
import { PANEL_ROUTES } from './lazyComponents'
import { Navigate } from 'react-router-dom'

const advisorRouter: RouteObject[] = [
  {
    path: '/advisor',
    element: <Navigate to={'/advisor/main-room'} />,
  },
  {
    path: '/advisor/main-room',
    element: <PANEL_ROUTES.lazyEntryPanel />,
    id: 'main-room'
  },
  {
    path: '/advisor/catalog',
    element: <PANEL_ROUTES.lazyCatalog />,
    id: 'catalog'
  },
  {
    path: '/advisor/config',
    element: <PANEL_ROUTES.lazyConfigPage />,
    id: 'config'
  },
  {
    path: '/advisor/advisor-ai',
    element: <PANEL_ROUTES.lazyAdvisorAI />,
    id: 'advisor-ai'
  },
  {
    path: '/advisor/account',
    element: <PANEL_ROUTES.lazyAccount />,
    id: 'account'
  },
  {
    path: '/advisor/duel-simulator',
    element: <PANEL_ROUTES.lazyDuelSimulator />,
    id: 'duel-simulator'
  },
  {
    path: '/advisor/my-deck',
    element: <PANEL_ROUTES.lazyMyDeck />,
    id: 'my-deck'
  },
  {
    path: '*',
    element: <PANEL_ROUTES.lazyNotFound />
  }
]

export default advisorRouter
