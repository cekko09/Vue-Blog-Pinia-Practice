<template>
  <div>
    <img
      class="img-fluid"
      :src="blog.imageUrl"
      style="max-width: 500px; max-height: 200px"
      alt=""
    />
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.description }}</p>
    <router-link
      class="btn btn-warning text-white"
      :to="{ name: 'blog-edit', params: { id: blog.id } }"
      >Edit</router-link
    >
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores/index.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useBlogStore()
const blog = computed(() => store.getBlogById(Number(route.params.id)))
console.log('store.blogs:', store.blogs)
console.log('route.params.id:', route.params.id)
</script>
