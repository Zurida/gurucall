<template>
  <header class="header" id="header">
    <ui-overlay @close="closeMenu" v-if="isActive"></ui-overlay>
    <ui-container>
      <div class="header__wrapper">

        <Nav @click='closeMenu' v-if="isActive" class="header__nav header__nav--mob animated fadeInDown">
          <ui-btn v-scroll-to="'#application'" class="header__nav-btn">Заполнить анкету</ui-btn>
        </Nav>

        <a href='/' v-scroll-to="'#header'">
          <ui-logo class="header__logo"/>
        </a>

        <Nav class="header__nav header__nav--desk"/>

        <div class="header__contact" v-if="!isActive">
          <ui-btn call @click="$emit('click')">связаться со мной</ui-btn>
        </div>

        <div class="header__icons">
          <a class="header__close animated fadeIn" @click="closeMenu" v-if="isActive">
            <icon-close/>
          </a>
          <a class="header__burger" @click="closeMenu" v-else>
            <icon-burger/>
          </a>
        </div>

      </div>

    </ui-container>
  </header>
</template>

<script>
import Nav from '@/components/blocks/nav'


export default {
  components: {
    Nav
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    closeMenu() {
      this.isActive = !this.isActive
    },
  }
}
</script>

<style lang="stylus" scoped>
.header {
  box-shadow $shadow
  position fixed
  top 0
  left 0
  right 0
  width 100%
  background-color #ffffff
  z-index 10

  &__wrapper {
    display flex
    align-items center
    justify-content space-between
    min-height 72px
  }

  &__contact {
    flex-shrink 0
  }

  &__logo {
    +mob() {
      display inline-block
      width 97px
      flex-shrink 0
    }
  }


  &__nav {
    &-btn {
      position absolute
      bottom 40px
      left 5px

    }

    &--mob {
      display none
      +mob() {
        display block
        max-width 300px
        position absolute
        top 72px
        //left 50%
        //transform translateX(-50%)
        z-index 100
        overflow auto
        min-height 450px
        width 100%
      }
    }

    &--desk {
      +mob() {
        display none
      }

    }
  }


  &__close {
    cursor pointer

    .icon-close {
      width 22px
      height @width
      vertical-align middle

    }
  }

  &__burger {
    display none
    +mob() {
      display block
    }

    &:active {
      & >>> .icon-burger {
        path {
          fill $color-primary
        }
      }
    }

    & >>> .icon-burger {
      vertical-align middle
      cursor pointer
      width 24px
      height 18px
      line-height 18px
    }
  }
}
</style>