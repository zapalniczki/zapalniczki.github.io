import { RemoteConfigContext } from 'providers'
import { Route } from '../pages/App/routes'

const handleRoutes = (
  routes: Route[],
  remoteConfig: RemoteConfigContext,
  destination: 'FOOTER' | 'HAMBURGER' | 'MENU' | 'ROUTER'
) => {
  const isFooter = destination === 'FOOTER'
  const isHamburger = destination === 'HAMBURGER'
  const isMenu = destination === 'MENU'

  return routes
    .filter((route) => {
      if (isFooter || isHamburger || isMenu) {
        return route.order
      }

      return route
    })
    .sort((prev, next) => {
      if (isFooter || isHamburger || isMenu) {
        if ((prev?.order || 1) < (next?.order || 1)) {
          return -1
        }

        return 1
      }

      return 1
    })
    .filter((route) => remoteConfig[route.key])
}

export default handleRoutes
