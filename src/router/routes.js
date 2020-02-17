
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/produtos',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/produtos/Index.vue') },
      { path: ':id/compras', component: () => import('pages/produtos/Compras.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
