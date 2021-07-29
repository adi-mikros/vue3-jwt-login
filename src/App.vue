<template>
  <div id="app">
    <Navbar/>
    <div class="container mt-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'


  export default{
    name: 'App',
    components:{
      Navbar, 
    }
  }
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600&display=swap");
body {
  font-family: "Montserrat", sans-serif;
}
</style>
