<template>
  <!-- eslint-disable vue/no-v-html -->
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="home" class="d-flex flex-column justify-content-center align-items-center">
      <div class="intro-grid" />
      <div class="hero-container" data-aos="fade-in">
        <h1>Juan Daniel SANTANA</h1>
      </div>
    </section><!-- End Hero -->

    <main id="main">
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>{{ $t('home.about.title') }}</h2>
            <p v-html="$t('home.welcome')" />
          </div>

          <div class="row">
            <div class="col-lg-12 pt-5 pt-lg-0 content" data-aos="fade-left">
              <h3 class="mt-3 mb-4">
                {{ $t('home.about.personal_info') }}
              </h3>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.birthday_label') }}:</strong> <span>{{ $t('home.about.birthday_value') }}</span></li>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.place_label') }}:</strong> <span>{{ $t('home.about.place_value') }}</span></li>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.phone_label') }}:</strong> <span>{{ $t('home.about.phone_value') }}</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.age_label') }}:</strong> <span>{{ age }}</span></li>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.degree_label') }}:</strong> <span>{{ $t('home.about.degree_value') }}</span></li>
                    <li><b-icon-chevron-right /> <strong>{{ $t('home.about.driving_label') }}:</strong> <span>{{ $t('home.about.driving_value') }}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!-- End About Section -->

      <!-- ======= Resume Section ======= -->
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h2>{{ $t('home.resume.title') }}</h2>
            <p>{{ $t('home.resume.desc') }}</p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">
                {{ $t('home.resume.education.title') }}
              </h3>
              <div class="resume-item">
                <h4>{{ $t('home.resume.education.f1.name') }}</h4>
                <h5>{{ $t('home.resume.education.f1.date') }}</h5>
                <p v-html="$t('home.resume.education.f1.desc')" />
              </div>
              <div class="resume-item">
                <h4>{{ $t('home.resume.education.f2.name') }}</h4>
                <h5>{{ $t('home.resume.education.f2.date') }}</h5>
                <p v-html="$t('home.resume.education.f2.desc')" />
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">
                {{ $t('home.resume.experience.title') }}
              </h3>
              <div class="resume-item">
                <h4>{{ $t('home.resume.experience.e1.name') }}</h4>
                <h5>{{ $t('home.resume.experience.e1.date') }}</h5>
                <p v-html="$t('home.resume.experience.e1.desc')" />
              </div>
              <div class="resume-item">
                <h4>{{ $t('home.resume.experience.e2.name') }}</h4>
                <h5>{{ $t('home.resume.experience.e2.date') }}</h5>
                <p v-html="$t('home.resume.experience.e2.desc')" />
              </div>
            </div>
          </div>
        </div>
      </section><!-- End Resume Section -->

      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio section-bg">
        <div class="container">
          <div class="section-title">
            <h2>{{ $t('home.portfolio.title') }}</h2>
            <p>{{ $t('home.portfolio.desc') }}</p>
          </div>
          <portfolio-work :works="works" />
        </div>
      </section><!-- End Portfolio Section -->

      <!-- ======= Publications Section ======= -->
      <section id="publication" class="publication">
        <div class="container">
          <div class="section-title">
            <h2>{{ $t('home.publication.title') }}</h2>
            <p>{{ $t('home.publication.desc') }}</p>
          </div>

          <div class="row">
            <div class="col-lg-12 pt-5 pt-lg-0 content" data-aos="fade-left">
              <h3 class="mt-3 mb-4">
                {{ $t('home.publication.scientific') }}
              </h3>
              <div class="row">
                <div class="col-lg-12">
                  <div class="resume-item">
                    <h4>{{ $t('home.publication.ps1.title') }}</h4>
                    <h5>{{ $t('home.publication.ps1.date') }}</h5>
                    <p v-html="$t('home.publication.ps1.desc')" />
                  </div>
                  <div class="resume-item">
                    <h4>{{ $t('home.publication.ps2.title') }}</h4>
                    <h5>{{ $t('home.publication.ps2.date') }}</h5>
                    <p v-html="$t('home.publication.ps2.desc')" />
                  </div>
                  <div class="resume-item">
                    <h4>{{ $t('home.publication.ps3.title') }}</h4>
                    <h5>{{ $t('home.publication.ps3.date') }}</h5>
                    <p v-html="$t('home.publication.ps3.desc')" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!-- End Publications Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact section-bg">
        <div class="container">
          <div class="section-title">
            <h2>{{ $t('home.contact.title') }}</h2>
            <p>{{ $t('home.contact.desc') }}</p>
          </div>

          <div class="row" data-aos="fade-in">
            <div class="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">{{ $t('home.contact.form.name') }}</label>
                    <input type="text" name="name" class="form-control" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">{{ $t('home.contact.form.email') }}</label>
                    <input type="email" class="form-control" name="email" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">{{ $t('home.contact.form.subject') }}</label>
                  <input type="text" class="form-control" name="subject" required>
                </div>
                <div class="form-group">
                  <label for="name">{{ $t('home.contact.form.message') }}</label>
                  <textarea class="form-control" name="message" rows="10" required />
                </div>
                <div class="text-center">
                  <button type="submit">
                    {{ $t('home.contact.form.send') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section><!-- End Contact Section -->
    </main>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import { BIconChevronRight } from 'bootstrap-vue'

import WorksEn from '~/works/en.json'
import WorksFr from '~/works/fr.json'
import WorksEs from '~/works/es.json'

import PortfolioWork from '~/components/PortfolioWork.vue'

export default {
  name: 'IndexPage',
  components: {
    BIconChevronRight,
    PortfolioWork
  },
  layout: 'portfolio',
  data () {
    const works = { en: WorksEn, fr: WorksFr, es: WorksEs }
    return {
      works: works[this.$i18n.locale]
    }
  },
  computed: {
    age () {
      const today = new Date()

      return today.getFullYear() - 1992
    }
  }
}
</script>
