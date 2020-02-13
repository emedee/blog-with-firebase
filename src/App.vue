<template>
  <!-- <div id="app">
    <app-blog/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      
    </div>
    <router-view/>
  </div> -->
  <div id="app">
    <div class="wrapper">
      <app-blog/>
      <router-view/>
      <app-footer/>
    </div>  
  </div>
</template>

<script>
import Blog from '@/components/Blog.vue'
import footer from '@/components/footer.vue'
export default {
  components:{
    'app-blog': Blog,
    'app-footer': footer
  }
}
</script>

<style>

</style>
