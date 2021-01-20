<template>
  <nav class="nav" @click="$emit('click')">
    <no-ssr>
      <scrollactive class="my-nav" :modifyUrl="false">
        <ul class="nav__items">

          <li
              class="nav-item"
              v-for="item in items"
              :key="item.id"
          >

            <a
                :href="`#${item.url}`"
                class="nav-item__link scrollactive-item"
                @itemchanged.prevent="removeHash"
            >
              {{ item.name }}
            </a>

          </li>

        </ul>
      </scrollactive>
    </no-ssr>
    <slot/>
  </nav>
</template>

<script>
export default {

  data() {
    return {
      currentIndex: null,
      items: [
        {id: 0, name: 'О компании', url: 'who'},
        {id: 1, name: 'Работа с нами', url: 'work'},
        {id: 2, name: 'Условия', url: 'suggest'},
        {id: 3, name: 'Кого мы ищем', url: 'candidate'},
        {id: 4, name: 'Отзывы', url: 'comments'}
      ]
    }
  },
  methods: {
    removeHash() {

      const url = document.location;
      let urlHash = url.hash
      urlHash.split()[0] = ''


      // history.replaceState(null, null, ' ');

    }
  }
}
</script>

<style lang="stylus" scoped>
.nav {
  font-family $font-menu
  background-color #ffffff

  &__items {
    min-width 638px
    display flex
    align-items center
    justify-content space-between
    +desk() {
      min-width auto
    }
    +mob() {
      flex-direction column
      align-items flex-start
    }
  }

  &-item {
    position relative
    +mob() {
      width 100%
    }

    &:not(:last-child) {
      margin-right 20px
      +mob() {
        margin-right 0
      }
    }

    a {
      display inline-block
      font-size 14px
      line-height 16px
      text-transform uppercase
      color $color-text
      padding-top 20px
      padding-bottom 20px
      height 100%
      cursor pointer
      transition color 0.2s
      +mob() {
        display block
        padding-left 16px
        font-size 20px
      }

      &:after {
        content ''
        display block
        position absolute
        width 100%
        height 8px
        background-color $color-primary
        bottom -8px
        opacity 0
        transition opacity 0.2s
        +mob() {
          display none
        }
      }

      &:hover {
        &:after {
          opacity 1
        }
      }

      &.is-active {

        &:after {
          opacity 1
        }

        +mob() {
          color $color-default
          background-color $color-primary
          width 100%
        }
      }
    }
  }
}
</style>
