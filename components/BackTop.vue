<template>
  <div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <b-icon-arrow-up-short scale="2" style="color: #fff" />
    </a>
  </div>
</template>

<script>
import { BIconArrowUpShort } from 'bootstrap-vue'

export default {
  name: 'BackTop',
  components: {
    BIconArrowUpShort
  },
  mounted () {
    /**
     * Back to top button
     */
    window.addEventListener('load', this.toggleBacktotop)
    this.onscroll(document, this.toggleBacktotop)
  },
  methods: {
    toggleBacktotop () {
      const backtotop = document.querySelector('.back-to-top')

      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
    }
  }
}
</script>
