import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header/Header';
import { Nav } from '../components/Nav/Nav';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Root() {
  return (
    <div className="w-screen h-screen bg-slate-700">
      <Header />
      <Nav />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
