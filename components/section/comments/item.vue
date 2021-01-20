<template>
    <div class="comments-item">
        <div class="comments-item__img" :style="{backgroundImage:`url(${item.url})`}"/>
        <div class="comments-item__text">
            <p>{{item.text}}</p>
            <b>{{item.name}}</b>
        </div>
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
    .comments-item {
        max-width 514px
        padding 37px 48px 27px
        min-height 384px
        box-shadow 0px 4px 16px rgba(42, 62, 113, 0.16)
        margin-left auto
        margin-right auto
        border-radius 10px
        text-align center
        font-size 16px
        line-height 24px
        font-weight 500
        background-color #ffffff
        +mob() {
            padding 32px 8px
            max-width 290px
            font-size 15px
        }

        &__text {
            p {
                margin-bottom 7px
                +mob() {
                    margin-bottom 24px
                }
            }

            b {
                display inline-block
                max-width 232px
            }
        }

        &__img {
            display inline-block
            width 92px
            height @width
            margin-bottom 20px
            border-radius 50%
            border 4px solid $color-primary
            background-position center
            background-size cover
            background-repeat no-repeat
            +mob() {
                margin-bottom 28px
            }
        }
    }
</style>