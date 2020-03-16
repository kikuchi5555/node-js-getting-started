const pathmap = [
  {
    path: '/',
    component: () => import('@/components/page1.vue'),
  },
  {
    path: '/page2',
    component: () => import('@/components/page2.vue'),
  }
]

export default pathmap;