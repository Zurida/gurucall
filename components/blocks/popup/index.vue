<template>

  <div class="popup animated fadeIn">

    <div class="popup__wrapper">
      <div class="popup__overlay" @click="$emit('close')"/>

      <div class="popup__inner">

        <slot/>

        <div class="popup__close" @click="$emit('close')">
          <icon-close/>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  mounted() {
    document.addEventListener('keyup', this.onEscClose)
  },
  destroyed() {
    document.removeEventListener('keyup', this.onEscClose)
  },
  methods: {
    onEscClose($event){
      this.$emit('onEscClose', $event);
    }
  }
}
</script>

<style lang="stylus" scoped>
.popup {
  &__overlay {
    width 100%
    height 100%
    position absolute
    top 0px
    left 0px
    right 0
    bottom 0
    z-index: 20
    overflow auto
  }

  &__wrapper {
    width 100%
    height 100%
    position fixed
    z-index 40
    top 0
    bottom 0
    right 0
    left 0
    background rgba(0, 0, 0, 0.75)
    display flex
    align-items center
    justify-content center
  }

  &__inner {
    position relative
    background-color #ffffff
    z-index 23
    width 368px
    font-family $font-default
    max-width 100%
    padding 56px 38px
    border 2px solid $color-primary
    box-shadow 0px 31px 41px rgba(5, 12, 23, 0.14)
    border-radius 20px
    overflow-y auto
    +mob() {
      padding-top 26px
      padding-bottom 26px
    }
  }

  &__close {
    position absolute
    top 16px
    right 16px
    width 30px
    height @width
    transition opacity .2s
    z-index 1
    cursor pointer

    & >>> .icon-ui-close {
      right auto
      top auto

    }

    &:hover {
      opacity 0.7
    }
  }

  & >>> .ui-btn {
    display block
    width 100%
    margin-top 40px
    margin-bottom @margin-top
  }
}

</style>