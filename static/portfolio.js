(function () {
  'use strict'

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    const portfolioContainer = select('.portfolio-container')
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      })

      const portfolioFilters = select('#portfolio-flters li', true)

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault()
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active')
        })
        this.classList.add('filter-active')

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        })
        portfolioIsotope.on('arrangeComplete', function () {
          // AOS.refresh()
        })
      }, true)
    }
  })
})()
