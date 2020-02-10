<template>
  <div id="app">
    <app-blog/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Blog from '@/components/Blog.vue'
export default {
  components:{
    'app-blog': Blog
  }
}
</script>

<style>

</style>
