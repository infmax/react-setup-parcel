import * as React from 'react'

import Main from './Pages/Main'

export interface Iroute {
  key: string;
  path: string;
  component: any;
  label: string;
  routes?: Array<[Iroute]>;
}

const routes: Iroute[] = [
  {
    path: '/',
    component: Main,
    key: 'main',
    label: 'Home'
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
