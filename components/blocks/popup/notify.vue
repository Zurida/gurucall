<template>
  <div class="notify">
    <div class="notify__icon">
      <svg v-if="error" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="8.48529" width="12" height="80" rx="5" transform="rotate(-45 0 8.48529)" fill="#EB5757"/>
        <rect x="57" width="12" height="80" rx="5" transform="rotate(45 57 0)" fill="#EB5757"/>
      </svg>
      <svg v-else width="81" height="61" viewBox="0 0 81 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M29.2535 42.6115C27.2029 44.6399 23.9017 44.6399 21.8511 42.6115L10.0149 30.904C7.9643 28.8756 4.66312 28.8756 2.61248 30.904L1.83573 31.6723C-0.246842 33.7322 -0.246842 37.0961 1.83573 39.1561L21.8511 58.9539C23.9017 60.9823 27.2029 60.9823 29.2535 58.9539L78.4803 10.2621C80.5628 8.20219 80.5628 4.83829 78.4803 2.77835L77.7035 2.01004C75.6529 -0.0183184 72.3517 -0.0183188 70.301 2.01004L29.2535 42.6115Z"
            fill="#27AE60"/>
      </svg>


    </div>
    <div class="notify__content">
      <div class="notify__title">{{ title }}</div>
      <div class="notify__subtitle">{{ subtitle }}</div>
      <p>{{ text }}</p>
    </div>

    <div class="notify__btn" @click="$emit('close')">
      <ui-btn>Ок</ui-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Boolean,
    title: String,
    subtitle: String,
    text: String
  }
}
</script>

<style lang="stylus" scoped>
.notify {
  text-align center

  &__title {
    font-size 32px
    line-height 40px
    margin-bottom 8px
    font-weight 800
  }

  &__subtitle {
    font-size 18px
    line-height 28px
    font-weight 700
    margin-bottom 8px
  }

  &__icon {
    display flex
    align-items center
    justify-content center
    margin-left auto
    margin-right auto
    margin-bottom 30px
    width 120px
    height @width
    border-radius 50%
    background-color #F6F6F6
  }

  p {
    font-size 16px
    line-height 24px
    color #A2A2A2
    font-weight 500
  }

  .ui-btn {
    margin-bottom 0
  }

}
</style>