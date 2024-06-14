<template>
  <div>
    <BlogForm :blog="blog" />
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores/index.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BlogForm from '../components/BlogForm.vue'

const route = useRoute()
const store = useBlogStore()
const blog = computed(() => store.getBlogById(Number(route.params.id)))
</script>
