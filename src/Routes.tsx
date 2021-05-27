import * as React from 'react'

const Main = React.lazy(() => import('./Pages/Main'))
const Registry = React.lazy(() => import('./Pages/Registry'))
const NotFound = React.lazy(() => import('./Pages/NotFound'))
const Form = React.lazy(() => import('./Pages/Form'))

export interface Iroute {
  key: string;
  path?: string;
  component: any;
  label?: string;
  routes?: Array<[Iroute]>;
  exact?: boolean;
}

const routes: Iroute[] = [
  {
    path: '/',
    component: Main,
    key: 'main',
    label: 'Home',
    exact: true
  },
  {
    path: '/registry',
    component: Registry,
    key: 'registry',
    label: 'Registry'
  },
  {
    path: '/create',
    component: Form,
    key: 'form',
    label: 'Form'
  },
  {
    component: NotFound,
    key: 'notFound'
  }
  // {
  //   path: '/tacos',
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: '/tacos/bus',
  //       component: Bus
  //     },
  //     {
  //       path: '/tacos/cart',
  //       component: Cart
  //     }
  //   ]
  // }
]

export default routes
