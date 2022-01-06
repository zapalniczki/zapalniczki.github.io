import { RemoteConfigContext } from 'providers'
import { Route } from '../pages/App/routes'

const handleRoutes = (
  routes: Route[],
  remoteConfig: RemoteConfigContext,
  destination: 'FOOTER' | 'HAMBURGER' | 'MENU'
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

    .filter((route) => {
      if (isFooter || isHamburger || isMenu) {
        if (route.translationKey === 'christmas2021') {
          if (remoteConfig.christmas2021) {
            return false
          }

          return false
        }
      }

      return true
    })
}

export default handleRoutes
