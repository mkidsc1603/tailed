export const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../pages/Home.vue'),
  // },
  // {
  //   path: '/count',
  //   name: 'count',
  //   component: () => import('../pages/AddCount.vue'),
  // },
  // {
  //   path: '/account',
  //   name: 'account',
  //   component: () => import('../pages/Account.vue'),
  // },
  // {
  //   path: '/demo',
  //   name: 'demo',
  //   component: () => import('../pages/Demo.vue'),
  // },
  {
    path: '/main',
    name: 'main',
    component: () => import('../layouts/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('../pages/Account.vue'),
      }
    ],
  },
]
