<template>
    <div class="ui-base-icon">
        <div class="ui-base-icon__img"
             :style="{backgroundImage: `url('${url} ')`}"/>
        <span class="circle"/>
    </div>
</template>

<script>
    export default {
        props: {
            url: String
        }
    }
</script>

<style lang="stylus" scoped>
    .ui-base-icon {
        position relative
        z-index 0
        width 65px
        height @width
        display inline-block

        &__img {
            width 65px
            height @width
            background-size contain
            background-position center
            background-repeat no-repeat
            position relative
            z-index 1
        }

        .circle {
            display block
            position absolute
            width 33px
            height @width
            top 50%
            left 50%
            transform translate(-50%, -50%)
            border-radius 50%
            background-color $color-primary
        }

    }
</style>