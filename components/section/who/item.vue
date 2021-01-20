<template>
    <div class="who-figure">
        <div class="who-figure__number">
            <span>{{item.number}}</span>
        </div>
        <p v-html="item.text"/>
    </div>
</template>

<script>

    export default {
        props: {
            item: Object
        }
    }
</script>

<style lang="stylus" scoped>
    .who-figure {
        width 249px
        min-height 146px
        padding-top 20px
        padding-left 28px
        padding-right 12px
        box-shadow $shadow
        border-radius 10px
        margin-bottom 36px
        background-color $color-white
        +mob() {
            margin-bottom 23px
            &:last-child {
                margin-bottom 0
            }
        }

        &__number {
            font-size 32px
            line-height 40px
            font-weight 800
            margin-bottom 12px
            position relative
            display inline-block

            &:after {
                content ''
                display block
                position absolute
                width 100%
                min-width 128px
                background-color $color-primary
                border-radius 25px
                height 20px
                bottom 0
            }

            span {
                display inline-block
                position relative
                z-index 1
            }
        }

        p {
            font-size 16px
            line-height 24px
            font-weight 500
            color $color-text
        }
    }
</style>