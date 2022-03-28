import Vue from 'vue'

Vue.mixin({
  mounted () {
  },
  methods: {
    /**
     * Easy on scroll event listener
     */
    onscroll (el, listener) {
      el.addEventListener('scroll', listener)
    },
    /**
     * Scrolls to an element with header offset
     */
    scrollto (el) {
      const elementPos = document.querySelector(el).offsetTop
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      })
    }
  }
})
