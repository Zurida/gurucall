<template>
    <div class="advantages-item">
        <div class="advantages-item__icon">
            <ui-base-icon :url="require(`./img/icon-${item.id + 1}.svg`)"/>
        </div>
        <p v-html="item.title"/>
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
    .advantages-item {
        width 232px
        height @width
        border-radius 50%
        background-color #F6F6F6
        display flex
        align-items center
        justify-content center
        flex-direction column
        text-align center
        font-size 18px
        line-height 28px
        font-weight 700
        margin-bottom 48px
        +mob(){
            margin-bottom 0
        }
        & >>> .ui-base-icon {
            width 56px
            height @width
            &__img {
                width 56px
                height @width
            }
            .circle {
                width 35px
                height 35px
            }
        }
    }
</style>