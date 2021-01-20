<template>
    <div class="ready">
        <h3 class="ready__title">Готов работать с нами?</h3>
        <p class="ready__text">Заполни анкету <br>и мы свяжемся с тобой</p>
        <ui-btn v-scroll-to="'#application'">Заполнить анкету</ui-btn>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    .ready {
        max-width 464px
        margin-left auto
        margin-right @margin-left
        padding 48px 96px 60px
        border 2px solid #FFD200
        border-radius 20px
        background-color $color-white
        text-align center
        box-shadow 0px 31px 41px rgba(5, 12, 23, 0.14)
        position relative
        +mob() {
            padding-left 18px
            padding-right 18px
            border-radius 0
            border-left none
            border-right none
        }

        &:after {
            content ''
            display block
            position absolute
            width 60px
            height 100px
            background-image url("./img/arrow.png")
            background-size contain
            background-position center
            background-repeat no-repeat
            bottom -134px
            left 50%
            margin-left -(@width / 2)
            +mob() {
                display none
            }
        }

        &__title {
            font-size 32px
            line-height 40px
            margin-bottom 16px
            font-weight 800
            +mob() {
                font-size 30px
            }
        }

        &__text {
            font-size 16px
            line-height 24px
            font-weight 500
            margin-bottom 28px
        }
    }
</style>