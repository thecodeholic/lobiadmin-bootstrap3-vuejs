<template>
  <div id="app">
    <lobi-header></lobi-header>
    <lobi-navigation></lobi-navigation>
    <router-view/>
  </div>
</template>

<script>
import Header from './shared/components/header/Header'
import Navigation from './shared/components/navigation/Navigation'

export default {
  name: 'App',
  components: {
    'lobi-header': Header,
    'lobi-navigation': Navigation
  }
}
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/bootstrap";
  @import "./assets/scss/index";

</style>
