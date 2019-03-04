/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noredirect',
  name: 'System',
  meta: {
    title: 'system',
    icon: 'user'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/system/user'),
      name: 'user',
      meta: { title: 'user', noCache: true }
    },
    {
      path: 'role',
      component: () => import('@/views/system/role'),
      name: 'role',
      meta: { title: 'role', noCache: true }
    },
    {
      path: 'menu',
      component: () => import('@/views/system/menu'),
      name: 'menu',
      meta: { title: 'menu', noCache: true }
    }
  ]
}

export default systemRouter
