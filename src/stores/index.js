import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'blog_app_blogs'

// localStorage'dan verileri alır
const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { id: 1, title: 'First Blog', description: 'First blog description', imageUrl: '' },
  { id: 2, title: 'Second Blog', description: 'Second blog description', imageUrl: '' }
]

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    blogs: ref(initialState)
  }),
  actions: {
    addBlog(blog) {
      this.blogs.push({ ...blog, id: Date.now() })
      this.saveToLocalStorage()
    },
    getBlogById(id) {
      return this.blogs.find((blog) => blog.id === id)
    },
    updateBlog(id, updatedBlog) {
      const index = this.blogs.findIndex((blog) => blog.id === id)
      if (index !== -1) {
        this.blogs[index] = { ...updatedBlog, id }
        this.saveToLocalStorage()
      }
    },
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.blogs))
    }
  }
})
