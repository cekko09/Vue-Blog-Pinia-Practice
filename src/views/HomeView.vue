<template>
  <div>
    <h1>Blog List</h1>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="d-flex justify-content-center flex-column pt-5 w-50 text-center">
          <h1>Blog Sitem</h1>

          <router-link class="btn btn-primary m-2" to="/blogList">Blog Listem</router-link>
          <router-link class="btn btn-primary m-2" to="/AddBlog">Blog Ekle</router-link>
        </div>
      </div>
    </div>

    <BlogList />
  </div>
</template>

<script setup>
import BlogList from '../components/BlogList.vue'
</script>
