<template>
  <div :class="`col-lg-4 col-md-6 portfolio-item filter-${work.category}`">
    <div class="portfolio-wrap">
      <img :src="work.thumbnail" :alt="work.title" class="img-fluid">
      <div class="portfolio-links">
        <a :href="work.thumbnail" data-gallery="portfolioGallery" class="portfolio-lightbox" :title="`${work.title} - ${work.year}`"><b-icon-camera /></a>
        <nuxt-link :to="localePath({ name: 'work-slug', params: { slug: work.slug } })" :title="$t('home.portfolio.details')">
          <b-icon-info-square />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconCamera, BIconInfoSquare } from 'bootstrap-vue'

export default {
  name: 'WorkItem',
  components: {
    BIconCamera,
    BIconInfoSquare
  },
  props: {
    work: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
