<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
  @import '~vuetify/src/stylus/main'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
