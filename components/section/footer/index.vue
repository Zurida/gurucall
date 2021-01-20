<template>
  <footer class="footer">
    <ui-container>

      <div class="footer__wrapper">
        <ui-logo dark/>
        <p class="footer__text">Работа в call-центре премиум-уровня</p>
        <ui-btn call @click="$emit('click')">связаться со мной</ui-btn>
      </div>

    </ui-container>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      isPopupShow: false
    }
  },
  methods: {
    onEscClose(evt) {
      if (this.isPopupShow === true && evt.key == 'Escape') {
        this.togglePopup()
      }
    },
    togglePopup() {
      this.isPopupShow = !this.isPopupShow;
      this.bodyToggleShow()
    },
    bodyToggleShow() {
      document.body.classList.toggle('modal-open');
    },
  }
}
</script>

<style lang="stylus" scoped>
.footer {
  padding-top 42px
  padding-bottom @padding-top
  box-shadow 0px 16px 48px rgba(14, 55, 103, 0.18)
  background-color #ffffff

  &__wrapper {
    display flex
    justify-content space-between
    align-items center
    +mob() {
      flex-direction column
    }
  }

  &__text {
    font-size 16px
    line-height 24px
    font-weight 700
    +mob() {
      order 1
      margin-top 32px
      max-width 237px
      text-align center
    }
  }

  .ui-logo {
    max-width 150px
    max-height 44px
    +mob() {
      max-width 126px
      margin-bottom 32px
    }
  }

  .ui-btn {
    +mob() {
      max-width 183px
    }
  }
}
</style>
