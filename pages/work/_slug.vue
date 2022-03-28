<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>{{ work.title }}</h2>
          <ol>
            <li>
              <nuxt-link :to="localePath('index')">
                {{ $t('work_details.breadcrumbs.home') }}
              </nuxt-link>
            </li>
            <li>{{ $t('work_details.breadcrumbs.details') }}</li>
          </ol>
        </div>
      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div v-for="img in gallery" :key="img" class="swiper-slide">
                  <img :src="img" :alt="work.title">
                </div>
              </div>
              <div class="swiper-pagination" />
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>{{ $t('work_details.information') }}</h3>
              <ul>
                <li v-if="work.category">
                  <strong>{{ $t('work_details.category') }}</strong>: {{ work.category }}
                </li>
                <li v-if="work.year">
                  <strong>{{ $t('work_details.date') }}</strong>: {{ work.year }}
                </li>
                <li v-if="work.tags">
                  <strong>{{ $t('work_details.technologies') }}</strong>: {{ work.tags }}
                </li>
                <li v-if="work.doc">
                  <strong>{{ $t('work_details.doc') }}</strong>: <a :href="`/works/${work.doc}`">{{ work.doc }}</a>
                </li>
                <li v-if="work.href">
                  <strong>{{ $t('work_details.url') }}</strong>: <a :href="work.href">{{ work.href }}</a>
                </li>
                <li v-if="work.description">
                  <strong>{{ $t('work_details.description') }}</strong>: {{ work.description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Portfolio Details Section -->
  </main>
</template>

<script>
import WorksEn from '~/works/en.json'
import WorksFr from '~/works/fr.json'
import WorksEs from '~/works/es.json'

export default {
  name: 'WorkPage',
  components: {},
  layout: 'portfolio',
  data () {
    const works = { en: WorksEn, fr: WorksFr, es: WorksEs }
    return {
      work: works[this.$i18n.locale].find(work => work.slug === this.$route.params.slug)
    }
  },
  computed: {
    gallery () {
      const gallery = this.work.gallery

      if (gallery.length === 0) {
        if (this.work.thumbnail) {
          gallery.push(this.work.thumbnail)
        }
      }

      return gallery
    },
    tags () {
      return this.work.tags.split(',')
    }
  },
  mounted () {
    /* Refer Swiper JS */
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/vendor/swiper/swiper-bundle.min.js')
    document.head.appendChild(externalScript)
    /* Refer Swiper CSS */
    const externalCss = document.createElement('link')
    externalCss.setAttribute('href', '/vendor/swiper/swiper-bundle.min.css')
    externalCss.setAttribute('rel', 'stylesheet')
    externalCss.setAttribute('type', 'text/css')
    document.head.appendChild(externalCss)

    /* Refer initialize script */
    externalScript = document.createElement('script')
    externalScript.setAttribute('src', '/portfolio-details.js')
    document.head.appendChild(externalScript)
  }
}
</script>
