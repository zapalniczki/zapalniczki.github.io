import { RemoteConfig } from 'providers'
import { Route } from '../pages/App/routes'

const handleRoutes = (
  routes: Route[],
  remoteConfig: RemoteConfig,
  destination: 'FOOTER' | 'HAMBURGER' | 'MENU' | 'ROUTER' | 'FOOTER_ADMIN'
) => {
  const isFooter = destination === 'FOOTER'
  const isHamburger = destination === 'HAMBURGER'
  const isMenu = destination === 'MENU'
  const isFooterAdmin = destination === 'FOOTER_ADMIN'

  return routes
    .filter((route) => {
      if (isFooterAdmin) {
        return route.admin
      }

      return route
    })
    .filter((route) => {
      if (isFooter || isHamburger || isMenu) {
        return route.order
      }

      return route
    })
    .sort((prev, next) => {
      if (isFooter || isHamburger || isMenu || isFooterAdmin) {
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
