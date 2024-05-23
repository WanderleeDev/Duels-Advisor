import { RouteObject } from 'react-router-dom'
import advisorRouter from '../routes/advisorRoutes'

function getAvailableRoutes (): string[] {
  return advisorRouter.reduce(
    (routes: string[], route: RouteObject): string[] => {
      route.id && routes.push(route.id)
      return routes
    },
    []
  )
}

export default getAvailableRoutes
