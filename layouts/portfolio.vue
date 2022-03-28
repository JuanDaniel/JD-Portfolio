<template>
  <div id="wrapper">
    <mobile-nav />
    <app-header />
    <nuxt />
    <!-- <app-footer /> -->
    <back-top />
  </div>
</template>

<script>
import MobileNav from '~/components/MobileNav.vue'
import AppHeader from '~/components/AppHeader.vue'
import BackTop from '~/components/BackTop.vue'

export default {
  components: {
    MobileNav,
    AppHeader,
    BackTop
  }
}
</script>
