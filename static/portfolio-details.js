(function () {
  'use strict'

  /**
   * Portfolio details slider
   */
   new Swiper('.portfolio-details-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })
})()
