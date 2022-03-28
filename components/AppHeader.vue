<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="~/assets/img/profile7.jpg" alt="Juan Daniel Santana" class="img-fluid rounded-circle">
        <h1 class="text-light">
          <nuxt-link :to="localePath('index')">
            Juan Daniel
          </nuxt-link>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.linkedin.com/in/juan-daniel-santana-rod%C3%A9s-05188996">
            <b-icon-linkedin />
          </a>
          <a href="https://github.com/JuanDaniel">
            <b-icon-github />
          </a>
        </div>
      </div>

      <div class="lang-selector">
        <b-form-select
          v-model="locale"
          :options="langs"
          value-field="code"
          text-field="name"
          class="form-select form-select-sm"
          @change="onChange(locale)"
        />
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#home' })" class="nav-link scrollto active">
              <b-icon-house-door font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.home') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#about' })" class="nav-link scrollto">
              <b-icon-person font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.about') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#resume' })" class="nav-link scrollto">
              <b-icon-file-earmark-text font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.resume') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#portfolio' })" class="nav-link scrollto">
              <b-icon-briefcase font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.portfolio') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#publication' })" class="nav-link scrollto">
              <b-icon-layout-text-window-reverse font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.publication') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'index', hash: '#contact' })" class="nav-link scrollto">
              <b-icon-envelope-open font-scale="1.5" class="icon-menu" /> <span>{{ $t('navbar.contact') }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->
</template>

<script>
import { BIconLinkedin, BIconGithub, BIconHouseDoor, BIconPerson, BIconFileEarmarkText, BIconBriefcase, BIconLayoutTextWindowReverse, BIconEnvelopeOpen } from 'bootstrap-vue'

export default {
  components: {
    BIconLinkedin,
    BIconGithub,
    BIconHouseDoor,
    BIconPerson,
    BIconFileEarmarkText,
    BIconBriefcase,
    BIconLayoutTextWindowReverse,
    BIconEnvelopeOpen
  },
  data () {
    return {
      locale: this.$i18n.locale,
      langs: this.$i18n.locales
    }
  },
  mounted () {
    /**
     * Navbar links active state on scroll
     */
    window.addEventListener('load', this.navbarlinksActive)
    this.onscroll(document, this.navbarlinksActive)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          this.scrollto(window.location.hash)
        }
      }
    })
  },
  methods: {
    navbarlinksActive () {
      const navbarlinks = document.querySelectorAll('#navbar .scrollto')
      const position = window.scrollY + 200

      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) {
          return
        }
        const section = document.querySelector(navbarlink.hash)
        if (!section) {
          return
        }
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    },
    onChange (event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script>
