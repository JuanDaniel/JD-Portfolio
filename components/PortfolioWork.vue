<template>
  <div>
    <div class="row" data-aos="fade-up">
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">
            {{ $t('home.portfolio.all') }}
          </li>
          <li v-for="filter in filters" :key="filter[0]" :data-filter="`.filter-${filter[0]}`">
            {{ filter[0] }}
          </li>
        </ul>
      </div>
    </div>

    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
      <work-item
        v-for="work in orderWorks"
        :key="work.slug"
        :work="work"
      />
    </div>
  </div>
</template>

<script>
import WorkItem from '~/components/WorkItem.vue'

export default {
  name: 'PortfolioWork',
  components: {
    WorkItem
  },
  props: {
    works: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    filters () {
      let categories = {}

      this.works.forEach((work) => {
        work.category.split(',').forEach((cat) => {
          if (categories[cat] === undefined) {
            categories[cat.trim()] = 1
          } else {
            categories[cat.trim()]++
          }
        })
      })

      categories = Object.keys(categories).map(function (key) {
        return [key, categories[key]]
      })

      return categories.sort(function (first, second) {
        return second[1] - first[1]
      })
    },
    orderWorks () {
      return [...this.works].sort(function compare (first, second) {
        return second.year - first.year
      })
    }
  },
  mounted () {
    /* Refer GLightbox JS */
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/vendor/glightbox/js/glightbox.min.js')
    document.head.appendChild(externalScript)
    /* Refer GLightbox CSS */
    const externalCss = document.createElement('link')
    externalCss.setAttribute('href', '/vendor/glightbox/css/glightbox.min.css')
    externalCss.setAttribute('rel', 'stylesheet')
    externalCss.setAttribute('type', 'text/css')
    document.head.appendChild(externalCss)

    /* Refer AOS JS */
    /* externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/vendor/aos/aos.js')
    document.head.appendChild(externalScript) */
    /* Refer AOS CSS */
    /* externalCss = document.createElement('link')
    externalCss.setAttribute('href', '/vendor/aos/aos.css')
    externalCss.setAttribute('rel', 'stylesheet')
    externalCss.setAttribute('type', 'text/css')
    document.head.appendChild(externalCss) */

    /* Refer Isotope JS */
    externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/vendor/isotope-layout/isotope.pkgd.min.js')
    document.head.appendChild(externalScript)

    /* Refer initialize script */
    externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/portfolio.js')
    document.head.appendChild(externalScript)
  }
}
</script>
