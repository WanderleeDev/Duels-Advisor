import React from 'react'

export const MAIN_ROUTES = {
  lazyHome: React.lazy(() => import('../pages/Home/Home')),
  lazyAdvisor: React.lazy(() => import('../pages/Advisor/Advisor')),
  lazyNotFound: React.lazy(() => import('../pages/NotFound/NotFound')),
}

export const PANEL_ROUTES = {
  lazyMyDeck: React.lazy(() => import('../pages/MyDeck/MyDeck')),
  lazyDuelSimulator: React.lazy(() => import('../pages/DuelSimulator/DuelSimulator')),
  lazyConfigPage: React.lazy(() => import('../pages/ConfigPage/ConfigPage')),
  lazyCatalog: React.lazy(() => import('../pages/Catalog/Catalog')),
  lazyAdvisorAI: React.lazy(() => import('../pages/AdvisorAI/AdvisorAi')),
  lazyAccount: React.lazy(() => import('../pages/Account/Account')),
  lazyEntryPanel: React.lazy(() => import('../pages/EntryPanel/EntryPanel')),
  lazyNotFound: React.lazy(() => import('../pages/NotFound/NotFound'))
}
