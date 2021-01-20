<template>
  <div class="wrapper">
    <Header @click="togglePopup"/>
    <Main/>
    <Who/>
    <Work/>
    <Advantages/>
    <Suggest/>
    <Candidate/>
    <GetJob/>
    <Comments/>
    <Fill/>
    <Application/>
    <ScrollBtn v-if="isScrolled"/>
    <Footer @click="togglePopup"/>

    <portal to="popup-call">
      <Popup @close="togglePopup" v-show="isPopupShow" @onEscClose="onEscClose">
        <PopupForm @close="togglePopup"/>
      </Popup>
    </portal>

  </div>
</template>

<script>
import Header from '@/components/section/header'
import Footer from '@/components/section/footer'
import Main from '@/components/section/main'
import Who from '@/components/section/who'
import Work from '@/components/section/work'
import Advantages from '@/components/section/advantages'
import Suggest from '@/components/section/suggest'
import Candidate from '@/components/section/candidate'
import GetJob from '@/components/section/get-job'
import Comments from '@/components/section/comments'
import Fill from '@/components/section/fill'
import Application from '@/components/section/application'
import ScrollBtn from '@/components/blocks/scroll-btn'
import Popup from '@/components/blocks/popup'
import PopupForm from '@/components/blocks/popup/form'

export default {
  components: {
    Header,
    Footer,
    Main,
    Who,
    Work,
    Advantages,
    Suggest,
    Candidate,
    GetJob,
    Comments,
    Fill,
    Application,
    ScrollBtn,
    Popup,
    PopupForm
  },
  mounted() {
    window.addEventListener('scroll', this.showScrollBtn);
  },
  destroyed() {
    window.removeEventListener('scroll', this.showScrollBtn);
  },
  head() {
    return {
      title: 'Guru Call',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  data() {
    return {
      isScrolled: false,
      isPopupShow: false
    }
  },
  methods: {
    showScrollBtn(event) {
      const {isScrolled} = this;
      const scroll = window.scrollY;
      if (scroll > 60 && !isScrolled) {
        this.isScrolled = true;
      }
      if (scroll === 0 && isScrolled) {
        this.isScrolled = false;
      }
    },
    onEscClose(evt) {
      if (this.isPopupShow === true && evt.key == 'Escape') {
        this.togglePopup()
      }
    },
    togglePopup() {
      this.isPopupShow = !this.isPopupShow
      this.bodyToggleShow()
    },
    bodyToggleShow() {
      document.body.classList.toggle('modal-open');
    },
  }
}
</script>
