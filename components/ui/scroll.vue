<template>
    <a href="#" class="ui-scroll">
        <span/>
    </a>
</template>

<script>
    export default {
        name: "ui-scroll",
        props: {
            element: String
        }
    }
</script>

<style lang="stylus" scoped>
    .ui-scroll {
        width 40px
        height 40px
        background-color #189E9A
        display flex
        align-items center
        justify-content center
        border-radius 5px
        position absolute
        z-index 10
        cursor pointer
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
        transition background-color 0.2s
        &:hover {
            background-color #fff
            span {
                border-color #189E9A
            }
        }
        span {
            display inline-block
            width 16px
            height 16px
            border-right 3px solid #fff
            border-top 3px solid #fff
            transform rotate(-45deg)
            margin-top 5px
            transition border-color 0.2s
        }
    }
</style>