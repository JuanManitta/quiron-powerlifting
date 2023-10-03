import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { RouterProvider, Router, Route, RootRoute } from '@tanstack/react-router';

import { Athletes, Competitions, Home, Workouts } from './pages';

import './index.css';
import { App } from './App';
import { Login, Register } from './pages/auth';


const rootRoute = new RootRoute();

const AppRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});



const AuthLogin = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const AuthRegister = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});

const HomeRoute = new Route({
  // beforeLoad: async () => {
  //   const isAuth = false
  //   if(!isAuth){
  //     throw redirect({
  //       to: '/athletes',
  //     })
  //   }
  // },
  getParentRoute: () => rootRoute,
  path: '/home',
  component: Home,
});

const athletesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/athletes',
});

const athletesRouteIndex = new Route({
  getParentRoute: () => athletesRoute,
  path: '/',
  component: Athletes,
});

const athleteRoute = new Route({
  getParentRoute: () => athletesRoute,
  path: '$athleteId',
});

const competitionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/competitions',
  component: Competitions,
});

const workoutsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/workouts',
  component: Workouts,
});




const routeTree = rootRoute.addChildren([
  AppRoute,
  HomeRoute,  
  competitionsRoute, 
  workoutsRoute,
  athletesRoute.addChildren([athletesRouteIndex, athleteRoute]),
  AuthLogin, 
  AuthRegister
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
};

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
};