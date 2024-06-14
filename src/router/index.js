import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogEditView from '../views/BlogEditView.vue'
import BlogList from '../components/BlogList.vue'
import AddBlog from '../views/AddBlogView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/blog/:id', name: 'blog-view', component: BlogView, props: true },
  { path: '/edit/:id', name: 'blog-edit', component: BlogEditView, props: true },
  { path: '/blogList', name: 'blog-list', component: BlogList, props: true },
  { path: '/AddBlog', name: 'blog-add', component: AddBlog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
