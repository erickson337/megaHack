
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
      { path: '', component: () => import('pages/produtos/Index.vue') }
    ]
  },
  {
    path: '/perfil',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/perfil/Index.vue') }
    ]
  },
  {
    path: '/compras',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: 'produto/:id', component: () => import('pages/compras/Index.vue') },
      { path: 'finalizadas', component: () => import('pages/compras/ComprasFinalizadas.vue') }
    ]
  },
  {
    path: '/regras',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/regras/Index.vue') }
    ]
  },
  {
    path: '/ranking',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/ranking/Index.vue') }
    ]
  },
  {
    path: '/trocar-pontos',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/trocar_pontos/Index.vue') },
      { path: 'itens-adquiridos', component: () => import('pages/trocar_pontos/Itens_adquiridos.vue') }
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
