import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

const createRoute = (name, path, children) => ({
  name, path, children
})

const routes = [
  createRoute('signIn', '/sign-in'),
  createRoute('profile', '/profile'),
  createRoute('starting', '/starting'),
  createRoute('lobby', '/lobby'),
]

const options = {
  defaultRoute: 'starting'
}

export const router = createRouter(routes, options)
.usePlugin(listenersPlugin())
.usePlugin(browserPlugin({
  useHash: true
}))

export default router
