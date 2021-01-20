<template>
    <div class="suggest-item">
        <ui-base-icon :url="require(`./img/icon-${item.id + 1}.svg`)" class="suggest-item__img"/>
        <p class="suggest-item__title">{{item.title}}</p>
        <p class="suggest-item__text" v-html="item.text"/>
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
    .suggest-item {
        width 328px
        max-width 100%
        box-shadow $shadow
        padding 48px 32px 32px
        min-height 288px
        background-color $color-white
        border-radius 10px
        $parent = selector()
        &__img {
            margin-bottom 20px
        }
        & >>> .ui-base-icon {
            width 72px
            height @width
            &__img {
                width 72px
                height @width
            }
            .circle {
                width 40px
                height 40px
            }
        }
        &__title {
            font-weight 700
            font-size 18px
            line-height 28px
            margin-bottom 12px
        }

        &__text {
            font-size 16px
            line-height 24px
            font-weight 500
            color $color-text
        }
    }
</style>