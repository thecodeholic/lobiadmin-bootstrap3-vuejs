<template>
  <div id="app" :class="{'menu-hidden': !menuOpened}">
    <navbar></navbar>
    <sidebar></sidebar>
    <div id="main">
      <div id="ribbon" class="hidden-print">
        <a href="#dashboard" class="btn-ribbon" data-container="#main" data-toggle="tooltip"
           data-title="Show dashboard"><i
                class="fa fa-home"></i></a>
        <span class="vertical-devider">&nbsp;</span>
        <button class="btn-ribbon" data-container="#main" data-action="reload" data-toggle="tooltip"
                data-title="Reload content by ajax"><i class="fa fa-refresh"></i></button>
        <ol class="breadcrumb">
        </ol>
      </div>
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from './shared/services/event-bus'
import Navbar from './shared/components/navbar/Navbar'
import Sidebar from './shared/components/sidebar/Sidebar'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  data: () => {
    return {
      menuOpened: true
    }
  },
  created () {
    eventBus.$on('sidebarToggled', (opened) => {
      this.menuOpened = opened
    })
  }
}
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/bootstrap";
  $fa-font-path: "~font-awesome/fonts";
  @import "~font-awesome/scss/font-awesome";
  @import "./assets/scss/index";

</style>
