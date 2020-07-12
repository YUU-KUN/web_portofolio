<template>
<div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/header">Header</router-link> |
      <router-link to="/footer">Footer</router-link>
    </div> -->
    <div class="site-wrap" id="home-section">

    </div>
    <router-view name="header"/>
    <router-view/>
    <router-view name="services"/>
    <router-view name="works"/>
    <!-- <router-view name="happyClients"/> -->
    <!-- <router-view name="ourStudio"/> -->
    <!-- <router-view name="testimonials"/> -->
    <!-- <router-view name="blog"/> -->
    <router-view name="footer"/>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Beranda</router-link> |
      <router-link to="/header">Header</router-link> |
      <router-link to="/footer">Footer</router-link> 
    </div>

    <router-view name="header" />
      <div class="wrapper">
        <router-view />
      </div>
    <router-view name="footer" />
  </div> -->
</template>

<script>
import Navbar from './views/Header'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data : function(){
    return {
      status_login: ''
    }
  }
}
</script>
