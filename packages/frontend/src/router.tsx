import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Root } from './routes/root';
import { Index } from './components/Index/Index';
import Settings from './components/Settings/Settings';
import Renamerr from './components/Renamerr/Renamerr';

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});

const renamerrRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/renamerr',
  component: Renamerr,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  settingsRoute,
  renamerrRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
