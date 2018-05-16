<template>
  <router-link v-if="to" :to="to" tag="li" active-class="active" :exact="true">
    <a>
      <sidebar-item-content :icon="icon" :name="name" :badge="badge" :badge-classes="badgeClasses"></sidebar-item-content>
    </a>
  </router-link>
  <li v-else :class="{opened: opened}" >
    <a href="#" @click="toggleItem()">
      <sidebar-item-content :icon="icon" :name="name" :badge="badge" :badge-classes="badgeClasses"></sidebar-item-content>
      <i v-if="children && children.length" class="fa fa-chevron-circle-right menu-item-toggle-icon"></i>
    </a>
    <ul :style="{height: opened ? 'auto': '0px'}" v-if="children && children.length">
      <sidebar-item v-for="(childItem, i) in children"
                    :to="childItem.url"
                    :name="childItem.name"
                    :icon="childItem.icon"
                    :badge="childItem.badge"
                    :badge-classes="childItem.badgeClasses"
                    :children="childItem.children"
                    :key="i"
      ></sidebar-item>
    </ul>
  </li>
</template>

<script>
import SidebarItemContent from './SidebarItemContent'

export default {
  name: "SidebarItem",
  props: {
    to: [String, Object, Boolean],
    name: String,
    icon: String,
    badge: Number,
    badgeClasses: [String, Array],
    children: Array
  },
  components: {
    SidebarItemContent
  },
  data: () => {
    return {
      opened: false
    }
  },
  methods: {
    toggleItem () {
      if (this.children && this.children.length) {
        this.opened = !this.opened
      }
    }
  }
}
</script>

<style scoped>

</style>
