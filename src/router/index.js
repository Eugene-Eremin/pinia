import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Second from '../views/Second.vue'
import Three from '../views/Three.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/second',
    //   name: 'second',
    //   component: Second,
    //   meta: {auth: true}
    // },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)

//   console.log(to.meta.auth)

//   const auth = false

//   if (to.meta.auth && !auth) next({ name: from.name })
//   else next()
// })

export default router
