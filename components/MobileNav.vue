<template>
  <b-icon-list class="mobile-nav-toggle d-xl-none" />
</template>

<script>
import { BIconList } from 'bootstrap-vue'

export default {
  name: 'MobileNav',
  components: {
    BIconList
  },
  data () {
    return {
      isToggle: false
    }
  },
  mounted () {
    /**
     * Mobile nav toggle
     */
    document.querySelector('.mobile-nav-toggle')
      .addEventListener('click', function (e) {
        document.body.classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })

    /**
     * Scroll with ofset on links with a class name .scrollto
     */
    /* document.querySelectorAll('.scrollto').forEach((navbarlink) => {
      navbarlink.addEventListener('click', function (e) {
        if (document.querySelector(this.hash)) {
          e.preventDefault()

          const body = document.body
          if (body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active')
          }
          this.scrollto(this.hash)
        }
      })
    }) */
  }
}
</script>
