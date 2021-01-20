<template>
  <div class="ui-select" :class="{'ui-select--error': error}">
    <div class="ui-select__container">
      <select :value="value" @change="change" class="ui-select__field" :required="required">
        <option value="">{{ emptyText }}</option>
        <slot/>
      </select>
    </div>
    <div class="error-message animated fadeIn" v-if="error" v-text="error"/>
  </div>
</template>

<script>
export default {
  name: "ui-select",
  props: {
    required: Boolean,
    name: String,
    error: String,
    value: [String, Number],
    emptyText: String
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.value);
    }
  }
}
</script>

<style lang="stylus">
.ui-select {
  width 152px
  max-width 100%
  +mob() {
    width 100%
  }

  &__container {
    position relative

    &:after {
      content ''
      display block
      position absolute
      top 50%
      margin-top -9px
      right 12px
      width 9px
      height @width
      background transparent
      border-top 2px solid black
      border-right 2px solid black
      transform rotate(135deg)
      opacity 0.5
    }
  }

  select {
    width 100%
    margin-bottom 8px
    border-radius 5px
    padding 8px 16px
    appearance none
    color #727272
    border 1px solid #727272
    position relative
    z-index 1
    background-color transparent
  }

  option {
    padding 8px 16px
    background transparent
    color $color-default
    font-family $font-default
  }


  &--error {
    select {
      border 1px solid $color-error
    }
  }
}
</style>
