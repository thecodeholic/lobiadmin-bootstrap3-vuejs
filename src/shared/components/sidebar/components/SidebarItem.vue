<template v-if="to">
  <router-link :to="to" tag="li" active-class="active">
    <a>
      <i v-if="icon" class="fa menu-item-icon" :class="'fa-'+icon"></i>
      <span class="inner-text">{{name}}</span>
      <span v-if="badge" class="badge-wrapper">
        <span class="badge" :class="badgeClasses">{{badge}}</span>
      </span>
    </a>
  </router-link>
</template>

<template v-if="!to">
  <li>
    <a href="#">
      <i v-if="icon" class="fa menu-item-icon" :class="'fa-'+icon"></i>
      <span class="inner-text">{{name}}</span>
      <span v-if="badge" class="badge-wrapper">
        <span class="badge" :class="badgeClasses">{{badge}}</span>
      </span>
    </a>
    <ul v-if="children && children.length">
      <sidebar-item v-for="childItem in children"
                    :to="childItem.url"
                    :name="childItem.name"
                    :icon="childItem.icon"
                    :badge="childItem.badge"
                    :badge-classes="childItem.badgeClasses"
      ></sidebar-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    to: [String, Object],
    name: String,
    icon: String,
    badge: Number,
    badgeClasses: [String, Array],
    children: Array
  }
}
</script>

<style scoped>

</style>
