<template>
  <div id="app">
    <NavbarLayout />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavbarLayout from './layouts/NavbarLayout.vue'
</script>
