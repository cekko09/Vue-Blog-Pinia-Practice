<template>
  <div>
    <h2>Blog List</h2>
    <ul class="d-flex row">
      <div class="col-md-3" v-for="blog in blogs" :key="blog.id">
        <li class="list-group">
          <div class="d-flex flex-column">
            <img
              v-if="blog.imageUrl"
              :src="blog.imageUrl"
              alt="Blog Image"
              class="img-fluid"
              style="max-width: 500px; max-height: 200px; margin-bottom: 10px"
            />
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.description }}</p>

            <router-link
              class="btn btn-primary"
              :to="{ name: 'blog-view', params: { id: blog.id } }"
              >View</router-link
            >
            <button class="btn btn-danger mt-2" @click="deleteBlog(blog)">Delete</button>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores/index.js'
import { computed } from 'vue'

const store = useBlogStore()
const blogs = computed(() => store.blogs)
const deleteBlog = (blog) => {
  store.deleteBlog(blog.id)
}
</script>
