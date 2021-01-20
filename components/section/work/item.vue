<template>
    <div class="work-item">
        <ui-base-icon :url="require(`./img/icon-${item.id + 1}.svg`)"/>
        <p class="work-item__title">{{item.title}}</p>
        <p class="work-item__text" v-html="item.text"/>
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
    .work-item {
        width 272px
        max-width 100%
        box-shadow $shadow
        text-align center
        padding 40px 15px 27px 14px
        min-height 288px
        background-color $color-white
        border-radius 10px
        $parent = selector()

        +mob() {
            margin-left auto
            margin-right auto
        }

        &__title {
            font-weight 700
            font-size 18px
            line-height 28px
            margin-bottom 8px
        }

        &__text {
            font-size 16px
            line-height 24px
            font-weight 500
            color $color-text
        }
    }
</style>